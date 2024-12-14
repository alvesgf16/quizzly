import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E91',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  categoriesContainer: {
    width: '100%',
  },
  categoryButton: {
    backgroundColor: '#22E883',
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
