import auth from '@react-native-firebase/auth';
import { deleteItemAsync, setItem } from 'expo-secure-store';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  const emailAndPasswordSignUp = async (displayName, email, password) => {
    const credential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await credential.user.updateProfile({ displayName });
  };

  const emailAndPasswordSignIn = async (email, password) => {
    await auth().signInWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    auth().signOut();
  };

  useEffect(() => {
    auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetch('https://opentdb.com/api_token.php?command=request')
        .then((response) => response.json())
        .then((response) => {
          const { response_code: responseCode, token } = response;
    
          if (responseCode === 0) {
            setItem('token', token);
          }
        });
    } else {
      deleteItemAsync('token');
    }
  }, [user]);

  const value = useMemo(
    () => ({
      emailAndPasswordSignIn,
      emailAndPasswordSignUp,
      signOut,
      user,
    }),
    [user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserAuth = () => useContext(UserContext);
