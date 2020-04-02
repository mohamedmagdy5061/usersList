import React from 'react';
import { StyleSheet } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducers from './reducers'
import LoginForm from './components/LoginForm'
import Home from './screens/Home';
import Profile from './screens/Profile'
import AddForm from './screens/AddForm'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/ListScreen';
import ColorScreen from './screens/ColorScreen';

const Stack = createStackNavigator();



const ScreenOptions = {
  title:'My Profile',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#E34C4F' },
}

export default function App() {
  return (
    <Provider store={createStore(Reducers)}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={ColorScreen} 
      options={{
        ...ScreenOptions,
        title:'All Users',
      }}
      />
      <Stack.Screen name="Profile" component={Profile} 
       options={ScreenOptions}
      />
      <Stack.Screen name="AddForm" component={AddForm} />
      {/* <Stack.Screen name='ListScreen' component={ListScreen} /> */}
      <Stack.Screen name="ColorScreen" component={ColorScreen} />

      

    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  text: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600'
  }
});
