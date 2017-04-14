import React from 'react';
import Link from 'components/Link';
import styles from './Footer.styles';

export const Footer = () => (
    <footer className={styles.footer}>
        Last update {__LAST_COMMIT_DATE__}<span> &bull; </span>
        <Link
            to="//github.com/sergeybekrin/bekrin.me"
            eventLabel="github-source"
        >View source code</Link>
    </footer>
);

export default Footer;
