/* eslint-disable react/no-danger, react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import manifestPath from 'assets/manifest.json';

const ServerRoot = ({ assets, helmet, children = '' }) => (
    <html {...helmet.htmlAttributes.toComponent()}>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" value="width=device-width, initial-scale=1" />
            <link rel="manifest" href={manifestPath} />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//google-analytics.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link
                rel="stylesheet"
                href="//fonts.googleapis.com/css?family=Roboto+Mono:300,400,700"
            />
            {assets.css.map(href =>
                <link rel="stylesheet" href={href} key={href} />
            )}
            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            {helmet.link.toComponent()}
        </head>
        <body {...helmet.bodyAttributes.toComponent()}>
            <div data-approot dangerouslySetInnerHTML={{ __html: children }} />
            {assets.js.map(src =>
                <script async src={src} key={src} />
            )}
            {helmet.script.toComponent()}
        </body>
    </html>
);

const HelmetPropType = PropTypes.shape({
    toComponent: PropTypes.func.isRequired,
    toString: PropTypes.func.isRequired
});

ServerRoot.propTypes = {
    helmet: PropTypes.shape({
        htmlAttributes: HelmetPropType,
        title: HelmetPropType,
        meta: HelmetPropType,
        link: HelmetPropType
    }).isRequired,
    children: PropTypes.string,
    assets: PropTypes.shape({
        css: PropTypes.arrayOf(PropTypes.string),
        js: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};

ServerRoot.defaultProps = {
    head: {},
    children: null
};

export default ServerRoot;
