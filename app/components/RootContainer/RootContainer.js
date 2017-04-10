/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
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

    render() {
        return (
            <div className="Root">
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
