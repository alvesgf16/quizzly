import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000A0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333399',
    color: 'white',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  eyeIcon: { padding: 10 },
  loginButton: {
    backgroundColor: '#3333FF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'white',
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    marginTop: 20,
  },
  registerLink: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
