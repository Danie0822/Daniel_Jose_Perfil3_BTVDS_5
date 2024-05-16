import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5, 
  },
});

export default CustomTextInput;
