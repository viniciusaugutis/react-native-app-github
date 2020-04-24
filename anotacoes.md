## Rotas na aplicação

yarn add react-navigation
yarn add react-native-gesture-handler: animações dentro do react navigation. Gestos do usuário para arrastar menus etc

Algumas dependências precisam de atualização nativa para linkar a biblioteca. Isso consigo ver pela documentação da biblioteca

Para isso faço: react-native link

react-native link react-native-gesture-handler

react-native start: executa o arquivo de bundle com a aplicação
react-native start --reset-cache: quando fica dando erros de cache ou bibliotecas. Limpa o cache dos caminhos e imports

## React native async store

yarn add @react-native-community/async-storage
react-native link @react-native-community/async-storage

```javascript
import AsyncStorage from '@react-native-community/async-storage';
storeData = async () => {
  try {
    await AsyncStorage.setItem('@storage_Key', 'stored value');
  } catch (e) {
    // saving error
  }
};
```

```javascript
import AsyncStorage from '@react-native-community/async-storage';
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
```

Responsável por salvar informações em um banco local do celular

## Icones no react-native

yarn add react-native-vector-icons
react-native link react-native-vector-icons

## Code push

Atualizar uma versão sem enviar para loja de aplicativos.
Quando fizer alteração que muda apenas código javascript, da para fazer o code push.

## One Signal

Utilizado para push notification no react native

yarn add react-native-onesignal
react-native link react-native-onesignal

Firebase que vai permitir nos utilizarmos o Google Cloud Manager, que é o serviço de push notification da google

## App Center

Ferramenta da microsoft utilizada para codepush na aplicação

yarn global add appcenter-cli

appcenter login

Loga na aplicação e copia a chave gerada

appcenter apps list

Gerar chave do codepush: appcenter codepush deployment list -a viniciusaugutis/App-Github-react-native-ANDROID -k
