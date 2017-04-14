import React from 'react';
import NavigationItem from 'components/NavigationItem';
import NavigationSeparator from 'components/NavigationSeparator';
import styles from './Navigation.styles';

const Navigation = () => (
    <nav className={styles.navigation}>
        <NavigationItem label="About me" to="/" />
        <NavigationSeparator />
        <NavigationItem label="Projects" to="/projects" />
        <NavigationSeparator />
        <NavigationItem label="Contacts" to="/contacts" />
    </nav>
);

export default Navigation;
