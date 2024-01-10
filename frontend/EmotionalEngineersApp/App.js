import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AvatarScreen from "./src/screens/AvatarScreen";
import ChatScreen from "./src/screens/ChatScreen";
import MeditationScreen from "./src/screens/MeditationScreen";
import MoodTrackerScreen from "./src/screens/MoodTrackerScreen";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MoodTrackerScreen"
        screenOptions={{
          headerShown: false, // This will hide the header for all screens
        }}
      >
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
          <Stack.Screen name="AvatarScreen" component={AvatarScreen}/>
          <Stack.Screen name="ChatScreen" component={ChatScreen}/>
          <Stack.Screen name="MeditationScreen" component={MeditationScreen}/>
          <Stack.Screen name="MoodTrackerScreen" component={MoodTrackerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
