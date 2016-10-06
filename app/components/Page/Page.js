import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Footer from 'components/Footer';
import './Page.styl';

const Page = ({ title, children }) => (
    <DocumentTitle title={title}>
        <div className="Page">
            <div className="Page-contents">{children}</div>
            <Footer />
        </div>
    </DocumentTitle>
);

Page.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

export default Page;
