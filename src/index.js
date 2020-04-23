import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import './config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';
import createNavigation from './routes';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('2784bb8e-539e-4ee9-8086-d107ad58616e');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  //vai ser disparado automaticamente quando receber uma notificação e usuário estiver com a aplicação aberta
  //data vai vir todas informações e configurações da notificação
  //Não é disparada quando aplicativo estiver fechado no celular
  //Mostra algum feedback visual
  onReceived = (data) => {
    console.log(data);
  };

  //quando clica em uma notificação quando a aplicação está fechada e com ela a aplicação irá abrir
  //com as informações da notificação que foi disparada
  onOpened = (notification) => {};

  //quando o usuário faz um registro no nosso serviço de notificações
  //geralmente para relacionar usuário logado com uma notificação específica. Para usuário específico e associa esse id no usuário
  //Um usuário pode ter mais de um ids, por logar em vários dispositivos
  onIds = () => {};

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
