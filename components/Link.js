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

const Link = ({ href, className, nowrap, trackAs, ...props }) => {
  const Tag = trackAs ? OutboundLink : 'a';
  const extra = trackAs ? { to: href, eventLabel: trackAs } : { href };

  return (
    <Tag
      {...props}
      {...extra}
      className={classes(className, styles.link, nowrap && styles.nowrap)}
    />
  );
};

Link.propTypes = {
  className: string,
  href: string,
  nowrap: bool,
  trackAs: string,
};

export default Link;
