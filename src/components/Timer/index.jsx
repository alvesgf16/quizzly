import React, { useEffect, useRef } from 'react';
import { Text } from 'react-native';

import styles from './styles';
import { useGame } from '../../contexts/GameContext';

export default function Timer() {
  const Ref = useRef(null);

  const { isTimerStopped, setIsTimerStopped, setTimer, timer } = useGame();

  useEffect(() => {
    if (!isTimerStopped) {
      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setIsTimerStopped(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      Ref.current = countdown;
      return () => clearInterval(Ref.current);
    }
    return undefined;
  }, [isTimerStopped, setIsTimerStopped, setTimer]);

  return (
    <Text style={styles.timer}>
      Time left:
      {timer}s
    </Text>
  );
}
