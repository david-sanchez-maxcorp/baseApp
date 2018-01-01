import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Text } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle';

class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Card title="John Doe">
            <View
              style={{
                backgroundColor: '#bcbec1',
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 80,
                borderRadius: 40,
                alignSelf: 'center',
                marginBottom: 20
              }}
            >
              <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
            </View>
            <Button backgroundColor="#03A9F4" title="SIGN OUT" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
