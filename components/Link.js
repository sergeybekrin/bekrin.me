import React from 'react';
import { string, bool } from 'prop-types';
import { classes } from 'typestyle';
import { OutboundLink } from 'react-ga';
import { style } from 'typestyle';
import palette from '~/styles/palette';

const styles = {
  link: style({
    color: palette('blue'),
    textDecoration: 'none',
    transition: 'color 200ms ease',
    $nest: {
      '&:hover': {
        color: palette('red'),
      },
    },
  }),
  nowrap: style({
    whiteSpace: 'nowrap',
  }),
};

const Link = ({ href, className, nowrap, ...props }) => (
  <OutboundLink
    {...props}
    to={href}
    className={classes(className, styles.link, nowrap && styles.nowrap)}
  />
);

Link.propTypes = {
  className: string,
  href: string,
  nowrap: bool,
};

export default Link;
