import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import avatar9 from '../../assets/images/avatar9.png';
import { useUserAuth } from '../../contexts/UserContext';

function ProfileScreen({ navigation }) {
  const { signOut } = useUserAuth();

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

      {/* Title */}
      <Text style={styles.pageTitle}>Profile</Text>

      {/* Avatar and Name Section */}
      <View style={styles.profileHeader}>
        <Image source={avatar9} style={styles.avatar} />
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.rank}>Rank: #9</Text>
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <View style={styles.detailItem}>
          <Ionicons name="mail-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Email: user@example.com</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="md-trophy-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Points: 3600</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="clipboard-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Quizzes Taken: 25</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="people-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Followers: 120</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="medal-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Achievements: 15</Text>
        </View>
      </View>

      {/* Activity Section */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityItem}>
          <Ionicons name="checkmark-circle-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Completed Quiz: Math Quiz</Text>
        </View>
        <View style={styles.activityItem}>
          <Ionicons name="checkmark-circle-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Completed Quiz: History Quiz</Text>
        </View>
        <View style={styles.activityItem}>
          <Ionicons name="checkmark-circle-outline" size={18} color="#22E883" />
          <Text style={styles.text}>Completed Quiz: Science Quiz</Text>
        </View>
      </View>

      {/* Buttons for Actions */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil-outline" size={18} color="white" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            signOut();
            navigation.navigate('SignInPage');
          }} // Navigate to SignInPage
        >
          <Ionicons name="log-out-outline" size={18} color="white" />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default ProfileScreen;
