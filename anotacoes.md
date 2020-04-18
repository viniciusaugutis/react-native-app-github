## Rotas na aplicação

yarn add react-navigation
yarn add react-native-gesture-handler: animações dentro do react navigation. Gestos do usuário para arrastar menus etc

Algumas dependências precisam de atualização nativa para linkar a biblioteca. Isso consigo ver pela documentação da biblioteca

Para isso faço: react-native link

react-native link react-native-gesture-handler

react-native start: executa o arquivo de bundle com a aplicação
react-native start --reset-cache: quando fica dando erros de cache ou bibliotecas. Limpa o cache dos caminhos e imports
