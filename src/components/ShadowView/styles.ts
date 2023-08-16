import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 9,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  }
});
