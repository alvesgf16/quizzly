import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import styles from './styles';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar4 from '../../assets/images/avatar4.png';
import avatar5 from '../../assets/images/avatar5.png';
import avatar6 from '../../assets/images/avatar6.png';
import avatar7 from '../../assets/images/avatar7.png';
import avatar8 from '../../assets/images/avatar8.png';
import avatar9 from '../../assets/images/avatar9.png';

function LeaderboardScreen({ navigation }) {
  const leaderboardData = [
    {
      id: '1',
      name: 'John Doe',
      points: 4900,
      avatar: avatar1,
    },
    {
      id: '2',
      name: 'Sophia Johnson',
      points: 4700,
      avatar: avatar2,
    },
    {
      id: '3',
      name: 'Lucas Williams',
      points: 4700,
      avatar: avatar3,
    },
    {
      id: '4',
      name: 'Olivia Brown',
      points: 4450,
      avatar: avatar4,
    },
    {
      id: '5',
      name: 'Ava Smith',
      points: 4250,
      avatar: avatar5,
    },
    {
      id: '6',
      name: 'Ethan Harris',
      points: 3950,
      avatar: avatar6,
    },
    {
      id: '7',
      name: 'Isabella Davis',
      points: 3950,
      avatar: avatar7,
    },
    {
      id: '8',
      name: 'Mason Lee',
      points: 3700,
      avatar: avatar8,
    },
  ];

  const user = {
    id: '9',
    name: 'You',
    points: 3600,
    rank: 9,
    avatar: avatar9,
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Image source={item.avatar} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>
        {item.points}
        {' '}
        pts
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Ionicons
        name="arrow-back-outline"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      <Text style={styles.header}>Leaderboard</Text>
      <Text style={styles.subHeader}>
        Keep playing to climb the leaderboard and beat your friends&apos; scores.
        Stay on top for bragging rights!
      </Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.userContainer}>
        <Text style={styles.rank}>{user.rank}</Text>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.points}>
          {user.points}
          {' '}
          pts
        </Text>
      </View>
    </View>
  );
}

LeaderboardScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default LeaderboardScreen;
