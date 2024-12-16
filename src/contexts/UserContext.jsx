import auth from '@react-native-firebase/auth';
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

  const value = useMemo(
    () => ({
      user,
      emailAndPasswordSignUp,
      emailAndPasswordSignIn,
      signOut,
    }),
    [user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserAuth = () => useContext(UserContext);
