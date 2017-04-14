import React from 'react';
import { node } from 'prop-types';
import styles from './Content.styles';

const Content = ({ children }) => (
    <div className={styles.content}>{children}</div>
);

Content.propTypes = {
    children: node.isRequired
};

export default Content;
