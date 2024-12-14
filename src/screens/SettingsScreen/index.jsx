// SettingsPage.js
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Settings</Text>

      {/* Settings Options */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          thumbColor={notificationsEnabled ? '#22E883' : '#E8E8E8'}
          trackColor={{
            true: '#22E883', false: '#B0B0B0',
          }}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={() => setDarkModeEnabled(!darkModeEnabled)}
          thumbColor={darkModeEnabled ? '#2266E8' : '#E8E8E8'}
          trackColor={{
            true: '#2266E8', false: '#B0B0B0',
          }}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => Alert.alert('Settings saved!')}
      >
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Footer Icons */}
      <View style={styles.footerIcons}>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Ionicons
          name="log-out-outline"
          size={30}
          color="white"
          onPress={() => navigation.navigate('SignInPage')}
        />
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default SettingsScreen;