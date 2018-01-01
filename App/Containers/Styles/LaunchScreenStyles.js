import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  tabStyle: {
    backgroundColor: 'white'
  },
  labelStyle: {
    color: 'black'
  },
  indicatorStyle: {
    borderBottomColor: '#03A9F4',
    borderBottomWidth: 2
  },
  mainContainer: {
    flex: 1,
    marginVertical: Platform.OS === 'ios' ? 35 : 10
  },
  centered: {
    alignItems: 'center',
    marginBottom: 10
  }
});
