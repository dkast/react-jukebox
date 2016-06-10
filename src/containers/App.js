import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        OK
        {children}
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
