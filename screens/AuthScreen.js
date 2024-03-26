import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import PageContainer from '../components/PageContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { colors } from '../constants/colors';
import AppText from '../components/AppText';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <PageContainer>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => setIsSignUp((prev) => !prev)}
      >
        <AppText style={styles.linkText}>
          {isSignUp
            ? 'Already have an account? Sign in'
            : "Don't have an account? Sign up"}
        </AppText>
      </TouchableOpacity>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  linkText: {
    color: colors.blue,
    fontFamily: 'medium',
  },
});

export default AuthScreen;
