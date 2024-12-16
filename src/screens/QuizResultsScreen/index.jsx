import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function QuizResultsScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.resultText}>
        You scored {score} out of {totalQuestions}!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

QuizResultsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      score: PropTypes.number,
      totalQuestions: PropTypes.number,
    }),
  }).isRequired,
};

export default QuizResultsScreen;
