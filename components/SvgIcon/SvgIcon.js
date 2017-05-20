import React from 'react';
import { string } from 'prop-types';
import iconsPath from './assets/icons.svg';

const Icon = ({ code, ...props }) => (
    <svg {...props}>
        <use xlinkHref={`${iconsPath}#${code}`} />
    </svg>
);

Icon.propTypes = {
    code: string.isRequired
};

export default Icon;
