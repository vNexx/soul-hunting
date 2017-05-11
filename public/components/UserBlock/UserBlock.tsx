import * as React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {UserBlockBase} from './UserBlockBase/UserBlockBase';
import {UserBlockNickName} from './UserBlockNickName/UserBlockNickName';
import {UserBlockButton} from './UserBlockButton/UserBlockButton';
import {logoutUser, setCurrentUser} from '../../actions/User/User.actions';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';

import './UserBlock.scss';
import {UserBlockIcon} from './UserBlockIcon/UserBlockIcon';

class UserBlock extends React.Component<void, void> {
  logout() {
    this.props.logout();
  }

  render() {
    const {user} = this.props;

    user = this._checkName(user);
    return (
      <UserBlockBase>
        <UserBlockNickName nickname={ user } />
        <UserBlockButton click={ this.logout.bind(this) } />
        <UserBlockIcon />
      </UserBlockBase>
    );
  }

  _checkName(name: string) {
    if (name.length > 8) {
      name = name.slice(0, 8) + '...';
    }
    return name.toUpperCase();
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.authentication.user
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => {
      dispatch(togglePreloader());

      return logoutUser()
        .then((response: any) => {
          if (+response.status === 200) {
            localStorage.removeItem('token');
            dispatch(setCurrentUser(null));
          }

          dispatch(togglePreloader());
          browserHistory.push('/');
        });
    },

    setCurrentUser: (user: any) => {
      dispatch(setCurrentUser(user))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
