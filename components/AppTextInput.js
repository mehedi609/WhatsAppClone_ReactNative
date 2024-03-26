import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../constants/colors';
import AppText from './AppText';

const AppTextInput = ({
  label,
  iconPack: IconComponent,
  iconName,
  iconSize,
  errorText,
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>

      <View style={styles.inputContainer}>
        {iconName && (
          <IconComponent
            name={iconName}
            size={iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput style={styles.textInput} />
      </View>

      {errorText && (
        <View style={styles.errorContainer}>
          <AppText style={styles.errorText}>{errorText}</AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: colors.danger,
    fontFamily: 'italic',
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginVertical: 8,
    fontFamily: 'bold',
    letterSpacing: 0.3,
  },
  textInput: {
    flex: 1,
    color: colors.textColor,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    paddingTop: 0,
  },
});

export default AppTextInput;
