import React from 'react';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import spectroLogoPath from 'assets/project-spectro-logo.svg';
import './SpectroProjectCard.styl';

const SpectroProjectCard = () => (
    <Link
        className="SpectroProjectCard"
        eventLabel="spectro-link"
        to="//github.com/sergeybekrin/spectro"
    >
        <img
            className="SpectroProjectCard-image"
            width={150}
            height={75}
            src={spectroLogoPath}
            alt="Spectro"
        />
        <p className="SpectroProjectCard-label">
            <Formatter>
                Spectro is experimental modular content editor build in “pre-React era”
            </Formatter>
        </p>
    </Link>
);

export default SpectroProjectCard;
