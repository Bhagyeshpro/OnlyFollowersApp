import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/code/screens/HomeScreen';
import NewPostScreen from './src/code/screens/NewPostScreen';
import ProfileScreen from './src/code/screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
