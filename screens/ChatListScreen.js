import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ChatListScreen = (props) => {
  return (
    <View>
      <Text>ChatListScreen</Text>
      <Button
        title={'Go to Chat Screen'}
        onPress={() => {
          return props.navigation.navigate('ChatScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatListScreen;
