import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { useUserAuth } from '../../contexts/UserContext';

function HomeScreen({ navigation }) {
  const { signOut } = useUserAuth();

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.appName}>Quizzly</Text>

      {/* Description Section */}
      <Text style={styles.description}>
        Test your knowledge and compete with friends!
      </Text>

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#22E883',
          },
        ]} // Green button
        onPress={() => {
          navigation.navigate('QuizPage');
        }}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#2266E8',
          },
        ]} // Blue button
        onPress={() => navigation.navigate('LeaderboardPage')}
      >
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#8E22E8',
          },
        ]} // Purple button
        onPress={() => navigation.navigate('ProfilePage')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: '#22E883',
          },
        ]} // Green button
        onPress={() => navigation.navigate('HelpPage')}
      >
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>

      {/* Footer Icons */}
      <View style={styles.footerIcons}>
        <Ionicons
          name="settings-outline"
          size={30}
          color="white"
          onPress={() => navigation.navigate('SettingsPage')}
        />
        <Ionicons
          name="log-out-outline"
          size={30}
          color="white"
          onPress={() => {
            signOut();
            navigation.navigate('SignInPage');
          }}
        />
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
