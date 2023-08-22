import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
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
  detailItem: {
    fontSize: 12,
  },
  details: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    height: 200,
    width: '100%',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
  },
});
