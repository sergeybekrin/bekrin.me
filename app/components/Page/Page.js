import React from 'react';
import { node } from 'prop-types';
import Helmet from 'react-helmet';
import styles from './Page.styles';

const Page = ({ children, ...props }) => (
    <div className={styles.page}>
        <Helmet {...props} />
        {children}
    </div>
);

Page.propTypes = {
    children: node
};

Page.defaultProps = {
    children: null
};

export default Page;
