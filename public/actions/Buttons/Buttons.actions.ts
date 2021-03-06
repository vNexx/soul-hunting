import {NEXT_BUTTON} from '../../constants/Buttons/Buttons.constants';

export function setActive(button1: any, button2: any, button3: any, current: any): any {
  return {
    type: NEXT_BUTTON,
    payload: [
      {
        current
      },
      {
        button: button1
      },
      {
        button: button2
      },
      {
        button: button3
      }
    ]
  }
}
