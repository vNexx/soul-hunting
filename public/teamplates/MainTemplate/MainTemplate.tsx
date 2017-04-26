import * as React from 'react';

import {Logo} from "../../components/Logo/Logo";
import {PreLoader} from "../../components/PreLoader/PreLoader";
import {Footer} from "../../components/Footer/Footer";
import { connect } from 'react-redux';

import './MainTemplate.scss';
import {connect} from "react-redux";

<<<<<<< HEAD
class MainTemplate extends React.Component<void, void> {
  render() {
    return (
      <div className='wrapper'>
        {console.log(this.props.state)}
=======
interface Props {
  state: any;
}

class MainTemplate extends React.Component<Props, void> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
          {console.log(this.props.state)}
>>>>>>> e8b03d0d05bad9cfbbd1c60c1a8dbcc29d01db86
        <PreLoader />
        <Logo />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {state}
};

=======
const mapStateToProps = (state: any) => {
    return {state};
};


>>>>>>> e8b03d0d05bad9cfbbd1c60c1a8dbcc29d01db86
export default connect(mapStateToProps)(MainTemplate);
