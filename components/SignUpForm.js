import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import AppTextInput from './AppTextInput';
import SubmitButton from './SubmitButton';

const SignUpForm = () => {
  return (
    <>
      <AppTextInput
        label={'First Name'}
        iconPack={FontAwesome}
        iconName={'user-o'}
        errorText={'First name is required'}
      />
      <AppTextInput
        label={'Last Name'}
        iconPack={FontAwesome}
        iconName={'user-o'}
      />
      <AppTextInput label={'Email'} iconPack={Feather} iconName={'mail'} />
      <AppTextInput label={'Password'} iconPack={Feather} iconName={'lock'} />
      <SubmitButton
        style={{ marginTop: 20 }}
        title={'Sign up'}
        onPress={() => console.log('Sign Up')}
        disabled={true}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpForm;
