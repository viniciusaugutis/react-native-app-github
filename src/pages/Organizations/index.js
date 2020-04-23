import React, {Component} from 'react';

import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import OrganizationItem from './OrganizationItem';

export default class Organizations extends Component {
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
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);
    this.setState({data: response.data, loading: false});
    this.setState({refreshing: false});
  };

  renderList = () => {
    const {data, refreshing} = this.state;

    return data.length > 0 ? (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    ) : (
      <Text style={styles.infoNotFound}>Usuário não possui organizações</Text>
    );
  };

  renderListItem = ({item}) => {
    return <OrganizationItem organization={item} />;
  };

  render() {
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
