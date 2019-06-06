import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
    );
  }
}

MainRouter.propTypes = {};
