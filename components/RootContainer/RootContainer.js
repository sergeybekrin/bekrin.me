/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { node } from 'prop-types';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import styles from './RootContainer.styles';

/**
 * This wrapper component is required to make
 * hot module replacement work correctly with
 * stateless function components
 */
export default class RootContainer extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  render() {
    return (
      <div className={styles.root}>
        <Helmet
          titleTemplate="%s — Sergey Bekrin"
          defaultTitle="Sergey Bekrin, Software Engineer"
        />
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
      </div>
    );
  }
}
