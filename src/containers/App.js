import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Header from '../components/Header';

export class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        <Header></Header>
        <div className="ui main container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return ownProps;
}

export default connect(mapStateToProps, {
  //
})(App);
