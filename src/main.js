import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './screens/home.js';


const Navigator = StackNavigator({
  Home: { screen: Home }
});

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Navigator />;
  }
}