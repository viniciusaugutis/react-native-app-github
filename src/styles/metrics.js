import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window'); //pega largura e altura do celular do usuário

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screenWidth: width < height ? width : height, //nos da a possibilidade em trabalhar modo landscape (virado) ou portate (vertical)
  screenHeight: width < height ? width : height,
};
