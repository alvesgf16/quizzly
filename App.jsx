import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import HelpScreen from './src/screens/HelpScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import QuizScreen from './src/screens/QuizScreen';
import CategorySelectionScreen from './src/screens/CategorySelectionScreen';
import QuizResultsScreen from './src/screens/QuizResultsScreen';
import { UserContextProvider } from './src/contexts/UserContext';

const Stack = createStackNavigator();

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignInPage">
          <Stack.Screen
            name="SignInPage"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterPage"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HelpPage"
            component={HelpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LeaderboardPage"
            component={LeaderboardScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProfilePage"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SettingsPage"
            component={SettingsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategorySelectionPage"
            component={CategorySelectionScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="QuizPage"
            component={QuizScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="QuizResultsPage"
            component={QuizResultsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
