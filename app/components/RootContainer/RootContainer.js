/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import './RootContainer.styl';

/**
 * This wrapper component is required to make
 * hot module replacement work correctly with
 * stateless function components
 */
export default class RootContainer extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render () {
        return (
            <div className="Root">
                <Header />
                <Content>{this.props.children}</Content>
                <Footer />
            </div>
        );
    }
}
