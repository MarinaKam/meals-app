import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 9,
    elevation: 4,
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});
