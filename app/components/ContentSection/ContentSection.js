import React from 'react';
import { node } from 'prop-types';
import styles from './ContentSection.styles';

const ContentSection = ({ title, children, ...props }) => (
    <div className={styles.section} {...props}>
        <div className={styles.aside}>{title}</div>
        <div className={styles.content}>{children}</div>
    </div>
);

ContentSection.propTypes = {
    title: node.isRequired,
    children: node.isRequired
};

export default ContentSection;
