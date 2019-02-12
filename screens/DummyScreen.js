import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class DummyScreen extends Component {
  static navigationOptions = {
    title: 'Dummy bois'
  }

  render() {
    const {navigation: {navigate}} = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Dummy Screen </Text>
        <Button 
          title="Go To (dos)"
          onPress={() => navigate('Todo')}
          />
      </View>
    )
  }
}
