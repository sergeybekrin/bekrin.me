import { Component } from 'react';
import ErrorPage from '~/components/ErrorPage';

export default class Error extends Component {
    static getInitialProps ({ res, jsonPageRes }) {
        const statusCode = (
            res && res.statusCode ||
            jsonPageRes && jsonPageRes.status ||
            null
        );

        return { statusCode };
    }

    render() {
        return <ErrorPage message={this.props.statusCode} />;
    }
}
