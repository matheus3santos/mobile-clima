import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import TemplateClima from './screens/templateClima'; // Nome do componente em maiúscula conforme convenção
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName='TemplateClima'>
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="TemplateClima"
          component={TemplateClima}
          options={{ title: 'Template Clima',headerShown:false }}
          
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('TemplateClima')}>
        Ir para Template Clima
      </Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
