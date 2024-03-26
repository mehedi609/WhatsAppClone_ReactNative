import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import backgroundImage from '../assets/images/droplet.jpeg';
import { colors } from '../constants/colors';
import AppKeyboardAvoidingView from '../components/AppKeyboardAvoidingView';

const ChatScreen = () => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);

  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      <AppKeyboardAvoidingView>
        <ImageBackground
          style={styles.imageBackground}
          source={backgroundImage}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('Pressed!')}
          >
            <Feather name='plus' size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />

          {messageText === '' ? (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log('Pressed!')}
            >
              <Feather name='camera' size={24} color={colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.mediaButton, styles.sendButton]}
              onPress={sendMessage}
            >
              <Feather
                name='send'
                size={18}
                color={colors.white}
                style={{ marginLeft: -1 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </AppKeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    paddingHorizontal: 12,
    marginHorizontal: 15,
  },
});

export default ChatScreen;
