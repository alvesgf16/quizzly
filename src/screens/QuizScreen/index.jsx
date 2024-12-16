import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';

import styles from './styles';
import Question from '../../components/Question';
import Timer from '../../components/Timer';
import { useGame } from '../../contexts/GameContext';

function QuizScreen({ navigation }) {
  const {
    getQuestions,
    isTimerStopped,
    questionIndex,
    questions,
    score,
    setIsTimerStopped,
    setQuestionIndex,
    setTimer,
  } = useGame();

  const [progress, setProgress] = useState();

  useEffect(() => {
    getQuestions();
    setQuestionIndex(0);
    setProgress(new Animated.Value(0));
  }, [getQuestions, setQuestionIndex]);

  useEffect(() => {
    if (isTimerStopped) {
      // Go to the next question after a delay
      const delay = setTimeout(() => {
        if (questionIndex < questions.length - 1) {
          setQuestionIndex((prevIndex) => prevIndex + 1);
          setTimer(10); // Reset the timer for the next question
          setIsTimerStopped(false);
          Animated.timing(progress, {
            toValue: (questionIndex + 1) / questions.length,
            duration: 500,
            useNativeDriver: false,
          }).start();
        } else {
          // End of quiz (Show results page)
          navigation.navigate('QuizResultsPage', {
            score,
            totalQuestions: questions.length,
          });
        }
      }, 1000); // Delay before moving to the next question
      return () => clearTimeout(delay);
    }

    return undefined;
  }, [
    isTimerStopped, //
    navigation,
    progress,
    questionIndex, //
    questions.length, //
    score,
    setIsTimerStopped, //
    setQuestionIndex, //
    setTimer, //
  ]);

  // const handlePrevious = () => {
  //   if (questionIndex > 0) {
  //     setQuestionIndex(questionIndex - 1);
  //     setTimer(10); // Reset the timer for the previous question
  //     Animated.timing(progress, {
  //       toValue: (questionIndex - 1) / questions.length,
  //       duration: 500,
  //       useNativeDriver: false,
  //     }).start();
  //     setAnswerFeedback(null); // Reset feedback when going back
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Time!</Text>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: `${(questionIndex / questions.length) * 100}%`,
            },
          ]}
        />
      </View>

      <Question currentQuestion={questions[questionIndex]} />

      <Timer />
    </View>
  );
}

QuizScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default QuizScreen;
