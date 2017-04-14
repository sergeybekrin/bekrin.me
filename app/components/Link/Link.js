import React from 'react';
import { string } from 'prop-types';
import { OutboundLink } from 'react-ga';
import { classes } from 'typestyle';
import styles from './Link.styles';

const Link = props => (
    <OutboundLink
        {...props}
        className={classes(props.className, styles.link)}
    />
);

Link.propTypes = {
    className: string
};

Link.defaultProps = {
    className: null
};

export default Link;
