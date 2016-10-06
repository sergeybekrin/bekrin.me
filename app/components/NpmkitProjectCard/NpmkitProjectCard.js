import React from 'react';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import npmkitLogoPath from 'assets/project-npmkit-logo.svg';
import './NpmkitProjectCard.styl';

const NpmkitProjectCard = () => (
    <Link
        className="NpmkitProjectCard"
        eventLabel="npmkit-lnik"
        to="//github.com/sergeybekrin/npmkit"
    >
        <img
            src={npmkitLogoPath}
            alt="npmkit logo"
            width={82}
            height={42}
        />
        <h2 className="NpmkitProjectCard-label">
            <Formatter>npmkit</Formatter>
        </h2>
        <p className="NpmkitProjectCard-description">
            <Formatter>An app to help you to organize npm chaos</Formatter>
        </p>
    </Link>
);

export default NpmkitProjectCard;
