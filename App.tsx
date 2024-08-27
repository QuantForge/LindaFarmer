import {View, Text} from 'react-native';
import React from 'react';
import 'nativewind/types.d';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Greeting from './pages/Greeting';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './screens/Dashboard';
import FarmDetails from './screens/FarmDetails';
// import Items from './pages/Items';
import LandingPage from './screens/LandingPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name ="LandingPage"
          component = {LandingPage}
          options = {{headerShown: false}}
        />
        <Stack.Screen
          name="Greeting"
          component={Greeting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Items"
          component={Items}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name ="Dashboard"
          component = {Dashboard}
          options = {{headerShown: false}}
        />
         <Stack.Screen
          name ="FarmDetails"
          component = {FarmDetails}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;