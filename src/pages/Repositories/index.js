import React, {Component} from 'react';

import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);
    this.setState({data: response.data, loading: false});
  }

  renderList = () => {
    <Text>Lista</Text>;
  };

  render() {
    const {loading} = this.state;
    return (
      <View>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <Text>Lista</Text>
        )}
      </View>
    );
  }
}
