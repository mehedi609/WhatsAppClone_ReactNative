import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AppTextInput from './AppTextInput';
import SubmitButton from './SubmitButton';

const SignInForm = () => {
  return (
    <>
      <AppTextInput label={'Email'} iconPack={Feather} iconName={'mail'} />
      <AppTextInput label={'Password'} iconPack={Feather} iconName={'lock'} />
      <SubmitButton
        style={{ marginTop: 20 }}
        title={'Sign in'}
        onPress={() => console.log('Sign In')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignInForm;
