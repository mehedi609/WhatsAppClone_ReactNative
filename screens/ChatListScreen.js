import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ChatListScreen = (props) => {
  return (
    <View>
      <Text>ChatListScreen</Text>
      <Button
        title={'Go to ChatSettings'}
        onPress={() => {
          return props.navigation.navigate('ChatSettings');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatListScreen;
