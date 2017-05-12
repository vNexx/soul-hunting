import * as React from 'react';
import {Button} from '../../Button/Button';

export class UserBlockButton extends React.Component<any, void> {
  render() {
    return (
      <div className='userblock__button'>
        <Button
          text='LOGOUT'
          isActive={ false }
          click={ this.props.click }
          size='s'
        />
      </div>
    );
  }
}
