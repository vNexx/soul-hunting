import transport from '../../service/Transport/Transoprt';
import {SET_CURRENT_USER} from '../../constants/User/User.constants';

export function setCurrentUser(user: any): any {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function checkAuthentication(): any {
  return transport.get('/cur-user');
}

export function logoutUser(): any {
  return transport.post('/logout');
}
