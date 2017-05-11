import { SET_DEVICE } from '../../constants/Mobile/Mobile.constants';

function device(state = true, action: any) {
  if (action.type === SET_DEVICE) {
    return action.device;
  }

  return state;
}

export default device;
