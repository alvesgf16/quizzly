import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

function QuizScreen({ navigation }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'George Orwell', 'Jane Austen'],
      correctAnswer: 'Harper Lee',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which element has the chemical symbol O?',
      options: ['Oxygen', 'Gold', 'Osmium', 'Ozone'],
      correctAnswer: 'Oxygen',
    },
    {
      question: 'What is the boiling point of water?',
      options: ['100°C', '90°C', '110°C', '80°C'],
      correctAnswer: '100°C',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['Japan', 'China', 'Korea', 'India'],
      correctAnswer: 'Japan',
    },
    {
      question: 'What is the smallest continent?',
      options: ['Australia', 'Europe', 'Africa', 'Antarctica'],
      correctAnswer: 'Australia',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Vincent van Gogh',
        'Michelangelo',
      ],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'In which year did World War II end?',
      options: ['1945', '1939', '1918', '1965'],
      correctAnswer: '1945',
    },
    {
      question: 'What is the longest river in the world?',
      options: [
        'Amazon River',
        'Nile River',
        'Yangtze River',
        'Mississippi River',
      ],
      correctAnswer: 'Amazon River',
    },
  ];

  const handleAnswer = (answer) => {
    const correct = answer === questions[questionIndex].correctAnswer;
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }

    // Set the feedback (green for correct, red for incorrect)
    setAnswerFeedback(correct ? 'correct' : 'incorrect');

    // Go to the next question after a delay
    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setTimer(10); // Reset the timer for the next question
        Animated.timing(progress, {
          toValue: (questionIndex + 1) / questions.length,
          duration: 500,
          useNativeDriver: false,
        }).start();
        setAnswerFeedback(null); // Reset feedback for the next question
      } else {
        // End of quiz (Show results page)
        navigation.navigate('QuizResultsPage', {
          score,
          totalQuestions: questions.length,
        });
      }
    }, 1000); // Delay before moving to the next question
  };

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

  useEffect(() => {
    if (timer === 0) {
      handleAnswer('');
    } else {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
    return undefined;
  }, [timer]);

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

      {/* Question */}
      <Text style={styles.question}>{questions[questionIndex].question}</Text>

      {/* Timer */}
      <Text style={styles.timer}>
        Time left:
        {timer}s
      </Text>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {questions[questionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  answerFeedback === 'correct' &&
                  option === questions[questionIndex].correctAnswer
                    ? 'green'
                    : answerFeedback === 'incorrect' &&
                      option !== questions[questionIndex].correctAnswer
                    ? 'red'
                    : '#2266E8', // Default color for options
              },
            ]}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

QuizScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default QuizScreen;
