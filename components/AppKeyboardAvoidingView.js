import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const AppKeyboardAvoidingView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppKeyboardAvoidingView;
