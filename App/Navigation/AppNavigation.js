import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import I18n from "react-native-i18n";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from "react-navigation";
import SignupScreen from "../Containers/SignupScreen";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

const AuthTabNavigator = TabNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: "Log In"
      }
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: {
        tabBarLabel: "Sign Up"
      }
    }
  },
  {
    ...TabNavigator.Presets.AndroidTopTabs,
    initialRouteName: "LoginScreen",
    lazy: false,
    animationEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      indicatorStyle: {
        borderBottomColor: "#03A9F4",
        borderBottomWidth: 2
      },
      showLabel: true,
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        color: "black"
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
        headerTitle: "App Name"
      }
    }
  },
  {
    // Default config for all screens
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
