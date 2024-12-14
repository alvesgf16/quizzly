import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E91', // Deep blue background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 1, height: 1,
    },
    textShadowRadius: 5,
  },
  appName: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 1, height: 1,
    },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
    opacity: 0.8,
  },
  button: {
    width: 250,
    padding: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    transform: [{
      scale: 1,
    }],
    transition: 'transform 0.3s ease-in-out',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    position: 'absolute',
    bottom: 30,
  },
  footerIcon: {
    padding: 10,
    backgroundColor: '#00000040',
    borderRadius: 25,
    elevation: 5,
  },
});

export default styles;
