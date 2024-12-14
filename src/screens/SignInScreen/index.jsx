import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

function SignInScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the user entered credentials (just basic validation here)
    if (email && password) {
      // Assuming login is successful
      navigation.navigate('HomePage'); // Navigate to HomePage on successful login
    } else {
      Alert.alert('Please enter both email and password');
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
          style={[styles.input, {
            flex: 1,
          }]}
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
          <Text style={{
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
        Don&apos;t Have An Account?
        {' '}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('RegisterPage')} // Navigate to RegisterPage
        >
          Register
        </Text>
      </Text>
    </View>
  );
}

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignInScreen;
