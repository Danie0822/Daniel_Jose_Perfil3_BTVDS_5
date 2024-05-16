import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

function ListaComidas({ navigation }) {
  const [comidaSeleccionada, setComidaSeleccionada] = useState('');
  const [comidas, setComidas] = useState([]);
  const opcionesComidas = ['Pizza', 'Hamburguesa', 'Pollo', 'Lasaña', 'Tacos', 'Carne Asada'];

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Comidas Favoritas</Text>
      <View style={styles.contenedorInput}>
      </View>
      <FlatList
        data={opcionesComidas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.contenedorComida, item === comidaSeleccionada ? styles.comidaSeleccionada : null]}
            onPress={() => setComidaSeleccionada(item)}
          >
            <Text style={styles.textoComida}>{item}</Text>
          </TouchableOpacity>
        )}
        
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.comidaSeleccionadaTexto}>Comida seleccionada: {comidaSeleccionada}</Text>
    </SafeAreaView>
  );
}

export default ListaComidas;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contenedorInput: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAgregar: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotonAgregar: {
    color: 'white',
    fontWeight: 'bold',
  },
  contenedorComida: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  textoComida: {
    fontSize: 18,
    color: 'black',
  },
  comidaSeleccionada: {
    backgroundColor: 'yellow',
  },
  comidaSeleccionadaTexto: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
