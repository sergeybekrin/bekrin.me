import React, { PropTypes } from 'react';
import { OutboundLink } from 'react-ga';
import './Link.styl';

const Link = props => (
    <OutboundLink
        {...props}
        className={[ props.className, 'Link' ].join(' ')}
    />
);

Link.propTypes = {
    className: PropTypes.string
};

Link.defaultProps = {
    className: null
};

export default Link;
