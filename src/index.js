import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import './config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';
import createNavigation from './routes';
import CodePush from 'react-native-code-push';

class App extends Component {
  state = {
    userCheckedOnAsyncStore: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    this.setState({userCheckedOnAsyncStore: true, userLogged: !!username});
  }

  render() {
    const {userCheckedOnAsyncStore, userLogged} = this.state;

    if (!userCheckedOnAsyncStore) {
      return null;
    }
    const Routes = createNavigation(userLogged);
    return <Routes />;
  }
}

const styles = StyleSheet.create({});

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
