import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
  },
  innerWrapper: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
