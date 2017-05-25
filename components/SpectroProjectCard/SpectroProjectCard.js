import React from 'react';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import logoPath from './assets/logo.svg';
import styles from './SpectroProjectCard.styles';

const SpectroProjectCard = () => (
  <Link
    className={styles.card}
    eventLabel="spectro-link"
    to="//github.com/sergeybekrin/spectro"
  >
    <img
      className={styles.image}
      width={150}
      height={75}
      src={logoPath}
      alt="Spectro"
    />
    <p className={styles.label}>
      <Formatter>
                Spectro is experimental modular content editor build in
                “pre-React era”
            </Formatter>
    </p>
  </Link>
);

export default SpectroProjectCard;
