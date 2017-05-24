/* eslint-disable max-len */
import { Component } from 'react';
import { any, string } from 'prop-types';
import Head from 'next/head';
import { cssRule, style, setStylesTarget } from 'typestyle';
import { setupPage } from 'csstips';
import { px, viewHeight, viewWidth } from 'csx';
import Header from '~/components/Header';
import Content from '~/components/Content';
import Footer from '~/components/Footer';

setupPage('[data-approot]');

cssRule(':root', {
    '-webkit-font-smoothing': 'antialiased',
    font: '100%/1.5 sans-serif',
    boxSizing: 'border-box',
    minWidth: px(320),
    cursor: 'default'
});

const styles = {
    root: style({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        minHeight: viewHeight(100),
        width: viewWidth(100),
        fontSize: px(18)
    })
};

export default class Layout extends Component {
    static propTypes = {
        children: any.isRequired,
        title: string
    };

    componentDidMount() {
        setStylesTarget(document.querySelector('[data-typestyle]'));
    }

    render() {
        const title = (
            this.props.title ?
            `${this.props.title} — Sergey Bekrin` :
            'Sergey Bekrin, Software Engineer'
        );

        return (
            <div data-approot className={styles.root}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>{title}</title>
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="dns-prefetch" href="//google-analytics.com" />
                    <link rel="dns-prefetch" href="//www.google-analytics.com" />
                    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono:300,400,700" />
                </Head>
                <Header />
                <Content>{this.props.children}</Content>
                <Footer />
            </div>
        );
    }
}
