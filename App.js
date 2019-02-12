import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    todos: [
      { task: 'Bangun'},
      { task: 'Mandi'},
      { task: 'Hacktiv8'},
    ],
    text: ''
  }
  
  render() {
    const {todos, text} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <Text style={{color: 'white', fontSize: 30}}>ZenFox's Todo List</Text>
        </View>
        <View style={styles.view2}>
          {this.state.todos.map(todo => (
            <Text style={{color: 'white', fontSize: 20}} key={todo.task}>🚀 {todo.task}</Text>
          ))}
        </View>
        <View style={styles.view3}>
            <TextInput
             style={{width: '60%', height: 30, borderColor: 'black', borderBottomWidth: 1}}
             value={this.state.text}
             onChangeText={(text) => this.setState({text})}
             />
            <Button 
              title="add"
              onPress={() => this.setState({todos: todos.concat({task: text}), text: ''})}
              />
            <Button 
              title="remove"
              onPress={() => this.setState({todos: todos.slice(1)})}
              />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    width: '100%',
    backgroundColor: 'crimson',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 8,
    width: '100%',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 1,
    width: '100%',
    backgroundColor: 'mistyrose',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
