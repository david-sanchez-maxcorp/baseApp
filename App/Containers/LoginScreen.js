import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  Card,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this._navigateToHome = this._navigateToHome.bind(this);
  }

  _navigateToHome() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'MainScreen' })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Card>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN IN"
              onPress={this._navigateToHome}
            />
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
