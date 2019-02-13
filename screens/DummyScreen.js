import React, { Component } from 'react'
import { Text, View, Button, ActivityIndicator, Modal, FlatList } from 'react-native'

export default class DummyScreen extends Component {
  static navigationOptions = {
    title: 'Dummy bois'
  }

  componentDidMount = async () => {
    try {
      const res = await fetch('https://api.opendota.com/api/heroStats')
      const data = await res.json()
      this.setState({heroes: data})
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  state = {
    show: false,
    heroes: []
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show
    }, () => {
      // alert(JSON.stringify(this.state))
    })
  }

  render() {
    const {navigation: {navigate}} = this.props
    const { show, heroes } = this.state
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Dummy Screen </Text>
        <FlatList 
          data={heroes}
          initialNumToRender={10}
          renderItem={({item}) => <Text style={{fontSize: 100}}>{item.localized_name}</Text>}
          />
        {/* <Text>{JSON.stringify(heroes)}</Text> */}
        <Button 
          title="Go To (dos)"
          onPress={() => navigate('Todo')}
          />

        <Button 
          title="Hai modal"
          onPress={this.toggleModal}
          />
        <Modal
          visible={show}
          transparent={true}
          animationType="none"
          onRequestClose={this.toggleModal}
          >
          <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,0,0,0.3)"}}>
            <Text>Halo gue modal lho</Text>
            <Button 
              title="Matiin Modal"
              onPress={this.toggleModal}
              />
          </View>
        </Modal>
      </View>
    )
  }
}
