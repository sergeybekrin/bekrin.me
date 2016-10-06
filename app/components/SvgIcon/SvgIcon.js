import React, { PropTypes } from 'react';
import iconsPath from 'assets/icons.svg';

const Icon = ({ code, ...props }) => (
    <svg {...props} className={`SvgIcon SvgIcon--${code}`}>
        <use xlinkHref={`${iconsPath}#${code}`} />
    </svg>
);

Icon.propTypes = {
    code: PropTypes.string.isRequired
};

export default Icon;
