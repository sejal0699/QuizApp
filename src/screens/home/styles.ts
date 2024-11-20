import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E5FA',
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
  },
  quiz: {
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: '10%',
  },
  questionView: {
    backgroundColor: colors.white,
    padding: 50,
    borderRadius: 10,
    borderColor: colors.purple,
    borderWidth: 1,
  },
  buttons: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.purple,
    gap: 10,
    borderColor: colors.white,
    borderWidth: 2,
    marginTop: 10,
    cursor: 'pointer',
    width: '60%',
    top: 30,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    top: 12,
  },
  imageBackground: {
    width: 50,
    height: 50,
  },
  image: {
    top: 60,
  },
  score: {
    backgroundColor: '#A9ADF3',
    borderRadius: 130,
    padding: 40,
    paddingHorizontal: 20,
  },
  buttons1: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: colors.purple,
    gap: 10,
    borderColor: colors.white,
    borderWidth: 2,
    width: '70%',
    top: 10,
  },
  text2: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
