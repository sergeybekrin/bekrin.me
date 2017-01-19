import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import './Page.styl';

const Page = ({ children, ...props }) => (
    <div className="Page">
        <Helmet {...props} />
        {children}
    </div>
);

Page.propTypes = {
    children: PropTypes.node
};

Page.defaultProps = {
    children: null
};

export default Page;
