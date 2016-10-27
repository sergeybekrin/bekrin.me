import React from 'react';
import Link from 'components/Link';
import './Footer.styl';

export const Footer = () => (
    <footer className="Footer">
        Last update {__LAST_COMMIT_DATE__}<span> &bull; </span>
        <Link
            to="//github.com/sergeybekrin/bekrin.me"
            eventLabel="github-source"
        >View source code</Link>
    </footer>
);

export default Footer;
