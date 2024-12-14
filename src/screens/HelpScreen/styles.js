import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E91',
    padding: 20,
    paddingTop: 80, // Increased padding to move content down (for notch area)
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 40, // Reduced the margin to move it lower
  },
  card: {
    backgroundColor: '#ffffff20',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  icon: {
    marginRight: 15,
  },
  cardText: {
    fontSize: 15,
    color: 'white',
  },
  supportEmail: {
    fontSize: 16,
    color: '#22E883',
    textDecorationLine: 'underline',
    marginTop: 40,
    marginLeft: -250,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
  faqButton: {
    backgroundColor: '#2266E8',
    padding: 15,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  faqButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
