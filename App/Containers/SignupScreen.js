import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/SignupScreenStyle";

class SignupScreen extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <Card>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." />
            <FormLabel>Name</FormLabel>
            <FormInput placeholder="Name..." />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." />
            <FormLabel>Confirm Password</FormLabel>
            <FormInput secureTextEntry placeholder="Confirm Password..." />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN UP"
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
