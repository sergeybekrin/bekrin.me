import { Component } from 'react';
import { number } from 'prop-types';
import ErrorSection from '~/components/ErrorSection';

export default class Error extends Component {
  static getInitialProps({ res, jsonPageRes }) {
    const statusCode = (
      (res && res.statusCode) ||
      (jsonPageRes && jsonPageRes.status) ||
      404
    );

    return { statusCode };
  }

  static propTypes = {
    statusCode: number.isRequired,
  };

  render() {
    const statusCode = this.props.statusCode.toString();
    return <ErrorSection message={statusCode} />;
  }
}
