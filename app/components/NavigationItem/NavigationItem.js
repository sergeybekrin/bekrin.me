import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router';
import styles from './NavigationItem.styles';

const NavigationItem = ({ to, label }) => (
    <span className={styles.item}>
        <Link
            activeClassName={styles.linkActive}
            className={styles.link}
            onlyActiveOnIndex={to === '/'}
            to={to}
        >{label}</Link>
    </span>
);

NavigationItem.propTypes = {
    to: string.isRequired,
    label: string.isRequired
};

export default NavigationItem;
