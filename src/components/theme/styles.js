import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f4f4',
  },
  holderStyle: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#f8f4f4',
    width: 75,
    height: 75,
    borderRadius: 40,
    bottom: 25,
    zIndex: 15,
  },
  barStyle: {
    position: 'absolute',
    backgroundColor: '#2196F3',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
