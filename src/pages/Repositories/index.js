import React, {Component} from 'react';

import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import RepositoryItem from './RepositoryItem';

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);
    this.setState({data: response.data, loading: false});
    this.setState({refreshing: false});
  };

  renderList = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  renderListItem = ({item}) => {
    return <RepositoryItem repository={item} />;
  };

  render() {
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
