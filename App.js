import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaComidas from './src/Lista';
import Nombre from './src/Nombre'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Nombre">
        <Tab.Screen 
          name="Nombre" 
          component={Nombre} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color="blue" />
            ),
          }}
        />
        <Tab.Screen 
          name="Comidas" 
          component={ListaComidas} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={size} color="red" /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
