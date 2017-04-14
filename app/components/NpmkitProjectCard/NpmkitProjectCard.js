import React from 'react';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import logoPath from './assets/logo.svg';
import styles from './NpmkitProjectCard.styles';

const NpmkitProjectCard = () => (
    <Link
        className={styles.card}
        eventLabel="npmkit-lnik"
        to="//github.com/sergeybekrin/npmkit"
    >
        <img
            src={logoPath}
            alt="npmkit logo"
            width={82}
            height={42}
        />
        <h2 className={styles.label}>
            <Formatter>npmkit</Formatter>
        </h2>
        <p className={styles.description}>
            <Formatter>An app to help you to organize npm chaos</Formatter>
        </p>
    </Link>
);

export default NpmkitProjectCard;
