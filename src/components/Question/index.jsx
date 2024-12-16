import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import OptionButton from '../OptionButton';

export default function Question({ currentQuestion }) {
  if (!currentQuestion) {
    return null;
  }

  const { correctAnswer, options, question } = currentQuestion;

  return (
    <>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map(({ text }) => (
          <OptionButton
            key={`alternative-${text.replace(' ', '-')}`}
            text={text}
            isCorrect={text === correctAnswer}
          />
        ))}
      </View>
    </>
  );
}

Question.propTypes = {
  currentQuestion: PropTypes.shape({
    correctAnswer: PropTypes.string,
    options: PropTypes.shape({
      map: PropTypes.func
    }),
    question: PropTypes.string
  })
}

Question.defaultProps = {
  currentQuestion: null,
};
