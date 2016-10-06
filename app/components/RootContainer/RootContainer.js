/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
import './RootContainer.styl';

/**
 * This wrapper component is required to make
 * hot module replacement work correctly with
 * stateless function components
 */
export default class RootContainer extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string // eslint-disable-line react/no-unused-prop-types
        })
    };

    render () {
        const { children, location } = this.props;

        return (
            <div className="Root">
                <Header />
                <Content pathname={location.pathname}>{children}</Content>
            </div>
        );
    }
}
