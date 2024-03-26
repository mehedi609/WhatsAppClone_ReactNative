import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors } from '../constants/colors';

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'regular',
    color: colors.textColor,
    letterSpacing: 0.3,
  },
});

export default AppText;
