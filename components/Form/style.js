import {StyleSheet} from 'react-native';
import color from './../../contains/color';
const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: color.second,
  },
  input: {
    width: '80%',
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.second,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconwrapper: {
    width: 44,
    height: 44,
    backgroundColor: color.primary,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.backgorund,
  },
  icon: {
    fontSize: 24,
    color: color.white,
  },
});
export default styles;
