/* eslint-disable react/no-danger, react/forbid-prop-types */
import React, { PropTypes } from 'react';

const ServerRoot = ({ htmlAttributes, title, meta, link, children }) => (
    <html {...htmlAttributes.toComponent()}>
        <head>
            {title.toComponent()}
            {meta.toComponent()}
            {link.toComponent()}
        </head>
        <body>
            <div data-approot dangerouslySetInnerHTML={{ __html: children || '' }} />
            <script async src="/bundle.js" />
        </body>
    </html>
);

ServerRoot.propTypes = {
    htmlAttributes: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    link: PropTypes.object.isRequired,
    children: PropTypes.string
};

export default ServerRoot;
