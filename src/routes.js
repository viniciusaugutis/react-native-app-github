import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';

//sempre precisa criar um app container por fora para trabalhar com navegação no React Native
const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }),
);

export default Routes;
