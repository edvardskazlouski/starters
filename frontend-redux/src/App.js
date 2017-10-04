import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Router from './router';
import Header from './components/Header';
import ModalPortals from './components/ModalsPortal';

class App extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  getChildContext = () => ({ t: this.props.t });

  render() {
    return (
      <div>
        <Header />
        <Router />
        <ModalPortals />
      </div>
    );
  }
}

App.childContextTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(App);
