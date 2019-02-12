import {
  createAppContainer, 
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation'

//screens
import TodoScreen from '../screens/TodosScreen'
import DummyScreen from '../screens/DummyScreen'

const insideNav = createStackNavigator({
  Todo: TodoScreen,
  Dummy: DummyScreen
}, {
  initialRouteName: 'Dummy'
})

const rootNav = createDrawerNavigator({
  BukanTodo: TodoScreen,
  Dummy: insideNav
}, {
  initialRouteName: 'Dummy'
})


export default createAppContainer(rootNav)

// const rootAppNav = createAppContainer(rootNav)

// export default rootAppNav