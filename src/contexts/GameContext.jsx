import { getItemAsync } from 'expo-secure-store';
import he from 'he';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isTimerStopped, setIsTimerStopped] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  const difficultyPoints = useMemo(() => ({ easy: 1, medium: 2, hard: 3 }), []);

  const shuffle = (anArray) => {
    const result = [...anArray];
    let currentIndex = result.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex],
        result[currentIndex],
      ];
    }

    return result;
  };

  const formatResult = useCallback(
    ({
      difficulty,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    }) => {
      const options = shuffle([
        ...incorrectAnswers.map((text) => ({ text: he.decode(text) })),
        { text: he.decode(correctAnswer) },
      ]);

      return {
        difficulty,
        question: he.decode(question),
        options,
        correctAnswer: he.decode(correctAnswer),
      };
    },
    [],
  );

  const getQuestions = useCallback(async () => {
    const token = await getItemAsync('token');
    const url = `https://opentdb.com/api.php?amount=10&token=${token}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.response_code === 0) {
        setQuestions(data.results.map(formatResult));
      } else {
        console.error(
          `Failed to fetch questions. Response code was ${data.response_code}.`,
        );
      }
    } catch (e) {
      console.error('Error fetching questions:', e);
    }
  }, [formatResult]);

  const updateScore = useCallback(() => {
    const BASE_POINTS = 10;
    const difficulty =
      difficultyPoints[questions[questionIndex]?.difficulty] || 1;
    const points = BASE_POINTS + timer * difficulty;
    setScore((prevScore) => prevScore + points);
  }, [questionIndex, difficultyPoints, questions, timer]);

  const value = useMemo(
    () => ({
      getQuestions,
      isTimerStopped,
      questionIndex,
      questions,
      score,
      setCorrectAnswers,
      setIsTimerStopped,
      setQuestionIndex,
      setTimer,
      timer,
      updateScore,
    }),
    [
      questionIndex,
      getQuestions,
      isTimerStopped,
      questions,
      timer,
      score,
      updateScore,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGame = () => useContext(GameContext);
