// SettingsPage.js
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Switch, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { useUserAuth } from '../../contexts/UserContext';

function SettingsScreen({ navigation }) {
  const { signOut } = useUserAuth();

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
            true: '#22E883',
            false: '#B0B0B0',
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
            true: '#2266E8',
            false: '#B0B0B0',
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
          onPress={() => {
            signOut();
            navigation.navigate('SignInPage');
          }}
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
