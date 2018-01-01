import React from 'react';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import I18n from 'react-native-i18n';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import SignupScreen from '../Containers/SignupScreen';
import LoginScreen from '../Containers/LoginScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

const HomeStackNavigator = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const ProfileStackNavigator = StackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'Profile'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

const MainTabNavigator = TabNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="home"
            type="feather"
            size={33}
          />
        )
      }
    },
    ProfileScreen: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            color={tintColor}
            name="user"
            type="feather"
            size={33}
          />
        )
      }
    }
  },
  {
    ...TabNavigator.Presets.iOSBottomTabs,
    initialRouteName: 'HomeScreen',
    lazy: false,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: {
        borderBottomColor: '#03A9F4',
        borderBottomWidth: 2
      },
      showLabel: false,
      style: {
        backgroundColor: 'white'
      },
      labelStyle: {
        color: 'black'
      }
    }
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen
    },
    MainScreen: {
      screen: MainTabNavigator
    }
  },
  {
    // Default config for all screens
    initialRouteName: 'LaunchScreen',
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
