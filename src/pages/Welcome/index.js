import React, {Component} from 'react';
import api from '~/services/api';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;
    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      navigation.navigate('Repositories');
    } catch (err) {
      console.tron.log('Usuário inexistente');
    }
  };

  render() {
    const {username} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do github.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={(text) => this.setState({username: text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}> Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
