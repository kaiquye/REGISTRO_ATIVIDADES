import { runWithAdal } from 'react-adal';
import { authContext } from '../src/configs/ReactAdal';

const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
  require('./indexApp');
},DO_NOT_LOGIN);