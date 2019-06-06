import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { customFetch } from './utils/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cardActions from './redux/actions';

class App extends Component {
  // getShortcuts() {
  //   return customFetch('/api/shortcuts').then(shortcuts => {
  //     this.setState({ shortcuts });
  //   });
  // }

  render() {
    return (
      <div className="root-container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(cardActions, dispatch)
  })
)(App);
