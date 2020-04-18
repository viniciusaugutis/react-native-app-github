import React from 'react';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

// import { Container } from './styles';

const Welcome = () => (
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
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}> Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
