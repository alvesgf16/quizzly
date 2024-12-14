import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E91', // Deep blue background
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF20',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  settingText: {
    fontSize: 18,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#22E883',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    position: 'absolute',
    bottom: 20,
  },
});

export default styles;
