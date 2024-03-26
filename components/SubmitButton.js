import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { colors } from '../constants/colors';

const SubmitButton = ({ title, color, disabled, onPress, style }) => {
  const enabledBgColor = color || colors.primary;
  const disabledBgColor = colors.lightGrey;
  const bgColor = disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: bgColor }]}
      onPress={disabled ? undefined : onPress}
    >
      <AppText style={{ color: disabled ? colors.grey : colors.white }}>
        {title || 'Click me'}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SubmitButton;
