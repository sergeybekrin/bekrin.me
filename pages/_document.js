/* eslint-disable max-len */
import Document, { Main, NextScript } from 'next/document';
import { getStyles } from 'typestyle';

export default class Root extends Document {
    static getInitialProps({ renderPage }) {
        return {
            ...renderPage(),
            styles: getStyles()
        };
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                    <link rel="dns-prefetch" href="//google-analytics.com" />
                    <link rel="dns-prefetch" href="//www.google-analytics.com" />
                    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono:300,400,700" />
                    <style data-typestyle>{this.props.styles}</style>
                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
