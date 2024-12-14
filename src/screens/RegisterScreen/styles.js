import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000A0',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333399',
    color: 'white',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3333FF',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLink: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  registerLink: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
