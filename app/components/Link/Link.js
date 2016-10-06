import React, { PropTypes } from 'react';
import { OutboundLink } from 'react-ga';
import './Link.styl';

const Link = (props) => (
    <OutboundLink {...props} className={props.className ? `${props.className} Link` : 'Link'} />
);

Link.propTypes = {
    className: PropTypes.string
};

export default Link;
