import React from 'react';
import { string } from 'prop-types';
import { classes } from 'typestyle';
import { OutboundLink } from 'react-ga';
import { style } from 'typestyle';
import palette from '~/styles/palette';

const styles = {
  link: style({
    $debugName: 'link',
    color: palette('blue'),
    fontWeight: 400,
    textDecoration: 'none',
    transition: 'color 200ms ease',
    $nest: {
      '&:hover': {
        color: palette('red'),
      },
    },
  }),
};

const Link = props => (
  <OutboundLink
    {...props}
    className={classes(props.className, styles.link)}
  />
);

Link.propTypes = {
  className: string,
};

Link.defaultProps = {
  className: null,
};

export default Link;
