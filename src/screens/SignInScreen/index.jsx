import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useUserAuth } from '../../contexts/UserContext';

function SignInScreen({ navigation }) {
  const { user, emailAndPasswordSignIn } = useUserAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!user) {
    const handleLogin = () => {
      // Check if the user entered credentials (just basic validation here)
      try {
        if (email && password) {
          emailAndPasswordSignIn(email, password);
        } else {
          Alert.alert('Please enter both email and password');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/invalid-email':
            Alert.alert('That email address is invalid!');
            break;
          case 'auth/user-disabled':
            Alert.alert('Your account has been disabled!');
            break;
          case 'auth/user-not-found':
            Alert.alert('User account not found!');
            break;
          case 'auth/wrong-password':
            Alert.alert('Incorrect password!');
            break;
          default:
            Alert.alert(error);
            break;
        }
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Quizzly</Text>
        <Text style={styles.welcomeText}>Welcome to Quizzly</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input,
              {
                flex: 1,
              },
            ]}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Text
              style={{
                color: 'white',
              }}
            >
              {showPassword ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <Text style={styles.registerText}>
          Don&apos;t Have An Account?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('RegisterPage')}
          >
            Register
          </Text>
        </Text>
      </View>
    );
  }

  return navigation.navigate('HomePage');
}

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignInScreen;
