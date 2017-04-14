import React from 'react';
import Navigation from 'components/Navigation';
import styles from './Header.styles';

const Header = () => (
    <header className={styles.header}>
        <Navigation />
    </header>
);

export default Header;
