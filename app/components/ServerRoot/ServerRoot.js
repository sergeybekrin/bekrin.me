import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import DocumentTitle from 'react-document-title';
import manifestPath from 'assets/manifest.json';

const dnsPrefetchDomains = [
    '//fonts.googleapis.com',
    '//google-analytics.com',
    '//www.google-analytics.com'
];

const ServerRoot = ({ children, publicPath }) => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{DocumentTitle.rewind()}</title>
            {dnsPrefetchDomains.map((domain) =>
                <link rel="dns-prefetch" href={domain} key={domain} />
            )}
            <link rel="manifest" href={manifestPath} />
            {__PROD__ && <link rel="stylesheet" href={`${publicPath}bundle.css`} />}
            <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Mono:300,400,700" />
        </head>
        <body>
            <div
                data-approot
                dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
                    __html: children ? renderToString(children) : ''
                }}
            />
            <script async src={`${publicPath}bundle.js`} />
        </body>
    </html>
);

ServerRoot.propTypes = {
    children: PropTypes.node,
    publicPath: PropTypes.string.isRequired
};

export default ServerRoot;
