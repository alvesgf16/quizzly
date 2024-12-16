import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { useGame } from '../../contexts/GameContext';

function QuizResultsScreen({ navigation }) {
  const { correctAnswers, score } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>
      <Text style={styles.resultText}>
        You got {correctAnswers} right and scored {score} points!
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
