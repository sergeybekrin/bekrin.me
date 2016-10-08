import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import './Page.styl';

const Page = ({ title, children }) => (
    <DocumentTitle title={title}>
        <div className="Page">{children}</div>
    </DocumentTitle>
);

Page.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

export default Page;
