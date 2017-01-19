/* eslint-disable react/no-danger, react/no-unused-prop-types */
import React, { PropTypes } from 'react';

const ServerRoot = ({ head, children }) => (
    <html {...head.htmlAttributes.toComponent()}>
        <head>
            {head.title.toComponent()}
            {head.meta.toComponent()}
            {head.link.toComponent()}
        </head>
        <body>
            <div data-approot dangerouslySetInnerHTML={{ __html: children || '' }} />
            <script async src="/bundle.js" />
        </body>
    </html>
);

const HelmetPropType = PropTypes.shape({
    toComponent: PropTypes.func.isRequired,
    toString: PropTypes.func.isRequired
});

ServerRoot.propTypes = {
    head: PropTypes.shape({
        htmlAttributes: HelmetPropType,
        title: HelmetPropType,
        meta: HelmetPropType,
        link: HelmetPropType
    }),
    children: PropTypes.string
};

ServerRoot.defaultProps = {
    head: {},
    children: null
};

export default ServerRoot;
