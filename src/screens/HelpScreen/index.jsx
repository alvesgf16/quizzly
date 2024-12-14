import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

function HelpScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <Ionicons
        name="arrow-back-outline"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />

      <Text style={styles.header}>Help & Support</Text>

      {/* Play Quizzes Section */}
      <View style={styles.card}>
        <Ionicons
          name="game-controller-outline"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.cardText}>
          Play quizzes to earn points and climb the leaderboard.
        </Text>
      </View>

      {/* Profile Section */}
      <View style={styles.card}>
        <Ionicons
          name="person-outline"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.cardText}>
          Access your profile to update details and track progress.
        </Text>
      </View>

      {/* Contact Support Section */}
      <View style={styles.card}>
        <Ionicons
          name="mail-outline"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.cardText}>
          Contact support if you face any issues:
          {' '}
        </Text>
        <Text style={styles.supportEmail}>support@quizzly.com</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          For more help, visit our FAQ page.
        </Text>
        <TouchableOpacity
          style={styles.faqButton}
          onPress={() => Alert.alert('Navigating to FAQ')}
        >
          <Text style={styles.faqButtonText}>Go to FAQ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

HelpScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default HelpScreen;
