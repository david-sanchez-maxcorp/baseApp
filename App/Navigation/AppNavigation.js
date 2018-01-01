import React from 'react';
import { View } from 'react-native';
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

const AuthTabNavigator = TabNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Log In'
      }
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: {
        tabBarLabel: 'Sign Up'
      }
    }
  },
  {
    ...TabNavigator.Presets.AndroidTopTabs,
    initialRouteName: 'LoginScreen',
    lazy: false,
    animationEnabled: true,
    tabBarPosition: 'top',
    tabBarOptions: {
      indicatorStyle: {
        borderBottomColor: '#03A9F4',
        borderBottomWidth: 2
      },
      showLabel: true,
      style: {
        backgroundColor: 'white'
      },
      labelStyle: {
        color: 'black'
      }
    }
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
      screen: AuthTabNavigator,
      navigationOptions: {
        headerTitle: 'App Name'
      }
    },
    MainScreen: {
      screen: MainTabNavigator,
      navigationOptions: {
        headerTitle: 'App Name'
      }
    }
  },
  {
    // Default config for all screens
    initialRouteName: 'MainScreen',
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
