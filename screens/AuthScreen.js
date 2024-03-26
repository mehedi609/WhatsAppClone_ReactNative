import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import PageContainer from '../components/PageContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import { colors } from '../constants/colors';
import AppText from '../components/AppText';
import AppKeyboardAvoidingView from '../components/AppKeyboardAvoidingView';

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <PageContainer>
      <ScrollView>
        <AppKeyboardAvoidingView>
          <>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.image}
                resizeMode='contain'
              />
            </View>

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
          </>
        </AppKeyboardAvoidingView>
      </ScrollView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '50%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
