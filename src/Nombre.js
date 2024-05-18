import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Importa las imágenes desde la carpeta local
import aleIMG from '../assets/foto_ALE.jpg';
import SancehzIMG from '../assets/foto_sanchez.jpg';

function CalculatorScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image 
            source={aleIMG} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Nombre: Daniel Alessandro Morales Sandoval</Text>
          <Text style={styles.id}>Carné: 20190652</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={SancehzIMG} 
            style={styles.photo} 
          />
          <Text style={styles.name}>Nombre: José Alejandro Sánchez Henríquez</Text>
          <Text style={styles.id}>Carné: 20220141</Text>
        </View>
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
    card: {
      backgroundColor: '#f8f8f8',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      marginBottom: 20,
      width: '80%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    photo: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
    },
    id: {
      fontSize: 16,
    },
});
