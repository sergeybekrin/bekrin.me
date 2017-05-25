import React, { Component } from 'react';
import { number } from 'prop-types';
import ErrorPage from '~/components/ErrorPage';

export default class Error extends Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = (
      (res && res.statusCode) ||
      (jsonPageRes && jsonPageRes.status) ||
      null
    );

    return { statusCode };
  }

  static propTypes = {
    statusCode: number.isRequired,
  };

  render() {
    return <ErrorPage message={this.props.statusCode} />;
  }
}
