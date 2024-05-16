import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomTextInput from './Input';
import CustomButton from './Botones';

function CalculatorScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const sum = () => {
      const res = parseFloat(num1) + parseFloat(num2);
      setResult(res.toString());
    };
  
    const resta = () => {
      const res = parseFloat(num1) - parseFloat(num2);
      setResult(res.toString());
    };
  
    const multi = () => {
      const res = parseFloat(num1) * parseFloat(num2);
      setResult(res.toString());
    };
  
    const divi = () => {
      if (parseFloat(num2) === 0) {
        setResult("dividir en cero no se puede ");
      } else {
        const res = parseFloat(num1) / parseFloat(num2);
        setResult(res.toString());
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <CustomTextInput
          value={num1}
          onChangeText={text => setNum1(text)}
          placeholder="Numero 1"
        />
        <CustomTextInput
          value={num2}
          onChangeText={text => setNum2(text)}
          placeholder="Numero 2"
        />
        <View style={styles.buttonsContainer}>
          <CustomButton
            onPress={sum}
            Texto="Suma"
          />
          <CustomButton
            onPress={resta}
            Texto="Resta"
          />
          <CustomButton
            onPress={multi}
            Texto="Multi"
          />
          <CustomButton
            onPress={divi}
            Texto="Divi"
          />
        </View>
        <Text style={styles.result}>{result}</Text>
      </View>
    );
  }
  
export default CalculatorScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    result: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  