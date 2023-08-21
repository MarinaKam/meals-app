import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},

  image: {
    width: '100%',
    height: 350,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },

  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },

  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#e2b497',
    textAlign: 'center',
  },

  detailText: {
    color: 'white',
  },

  listOuterContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },

  listContainer: {
    width: '80%',
  },
});
