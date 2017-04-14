/* eslint-disable react/no-danger */
import React from 'react';
import { shape, arrayOf, string, func } from 'prop-types';
import { getStyles } from 'typestyle';
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
            {__PROD__ && <style data-typestyle>{getStyles()}</style>}
        </head>
        <body {...helmet.bodyAttributes.toComponent()}>
            <div data-approot dangerouslySetInnerHTML={{ __html: children }} />
            {assets.js.map(src => <script async src={src} key={src} />)}
            {helmet.script.toComponent()}
        </body>
    </html>
);

const HelmetPropType = shape({
    toComponent: func.isRequired,
    toString: func.isRequired
});

ServerRoot.propTypes = {
    assets: shape({
        css: arrayOf(string),
        js: arrayOf(string)
    }).isRequired,
    helmet: shape({
        htmlAttributes: HelmetPropType,
        title: HelmetPropType,
        meta: HelmetPropType,
        link: HelmetPropType
    }).isRequired,
    children: string
};

export default ServerRoot;
