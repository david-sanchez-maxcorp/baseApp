import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Images } from '../Themes';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

// Styles
import styles from './Styles/LaunchScreenStyles';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
};

var firstRoute = () => <LoginScreen />;
var secondRoute = () => <SignupScreen />;

export default class LaunchScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Login' },
      { key: 'second', title: 'Signup' }
    ]
  };

  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleIndexChange = this._handleIndexChange.bind(this);
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabStyle}
      labelStyle={styles.labelStyle}
      indicatorStyle={styles.indicatorStyle}
    />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <LoginScreen navigation={this.props.navigation} />;
      case 'second':
        return <SignupScreen navigation={this.props.navigation} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Avatar
            large
            rounded
            title="BA"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
        </View>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </View>
    );
  }
}
