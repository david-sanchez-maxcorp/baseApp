import React, { Component } from 'react';
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

const images = [
  {
    key: 1,
    name: 'Nathan Anderson',
    image: require('../Images/1.jpg'),
    url: 'https://unsplash.com/photos/C9t94JC4_L8'
  },
  {
    key: 2,
    name: 'Jamison McAndie',
    image: require('../Images/2.jpg'),
    url: 'https://unsplash.com/photos/waZEHLRP98s'
  },
  {
    key: 3,
    name: 'Alberto Restifo',
    image: require('../Images/3.jpg'),
    url: 'https://unsplash.com/photos/cFplR9ZGnAk'
  },
  {
    key: 4,
    name: 'John Towner',
    image: require('../Images/4.jpg'),
    url: 'https://unsplash.com/photos/89PFnHKg8HE'
  }
];

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          {images.map(({ name, image, url, key }) => (
            <Card title={`CARD ${key}`} image={image} key={key}>
              <Text style={{ marginBottom: 10 }}>Photo by {name}.</Text>
              <Button backgroundColor="#03A9F4" title="VIEW NOW" />
            </Card>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
