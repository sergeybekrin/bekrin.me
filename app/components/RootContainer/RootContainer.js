/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import * as HeadTagsConstants from 'constants/HeadTagsConstants';
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
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    titleTemplate="%s — Sergey Bekrin"
                    defaultTitle="Sergey Bekrin, Software Engineer"
                    meta={HeadTagsConstants.DEFAULT_META_TAGS}
                    link={HeadTagsConstants.DEFAULT_LINK_TAGS}
                />
                <Header />
                <Content>{this.props.children}</Content>
                <Footer />
            </div>
        );
    }
}
