import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen';
import Register from './src/screens/Register';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />      
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
