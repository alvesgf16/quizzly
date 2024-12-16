import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { useGame } from '../../contexts/GameContext';

export default function OptionButton({ text, isCorrect }) {
  const {
    isTimerStopped,
    setCorrectAnswers,
    setIsTimerStopped,
    setTimer,
    updateScore,
  } = useGame();

  const handleAnswer = () => {
    setIsTimerStopped(true);
    setTimer(0);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      updateScore();
    }
  };

  const getButtonColor = () => {
    if (isTimerStopped) {
      if (isCorrect) {
        return 'green';
      }

      return 'red';
    }

    return '#2266E8';
  };

  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        {
          backgroundColor: getButtonColor(),
        },
      ]}
      onPress={handleAnswer}
      disabled={isTimerStopped}
    >
      <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
  );
}

OptionButton.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
