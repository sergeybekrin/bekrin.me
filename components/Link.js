import { string, bool } from 'prop-types';
import NextLink from 'next/link';
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

const Link = ({ href, className, nowrap, trackAs, ...props }) => {
  const extra = trackAs ? { to: href, eventLabel: trackAs } : { href };
  const Tag = trackAs ? OutboundLink : 'a';
  const child = (
    <Tag
      {...props}
      {...extra}
      className={classes(className, styles.link, nowrap && styles.nowrap)}
    />
  );

  return trackAs ? child : <NextLink href={href}>{child}</NextLink>;
};

Link.propTypes = {
  className: string,
  href: string,
  nowrap: bool,
  trackAs: string,
};

export default Link;
