import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Basic Validation
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Alert.alert('Error', 'Please enter a valid email!');
    } else {
      // Handle registration logic here (e.g., API call)
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('SignInPage'); // Navigate back to SignInPage
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="#fff"
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.loginLink}>
        Already have an account?
        {' '}
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('SignInPage')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default RegisterScreen;
