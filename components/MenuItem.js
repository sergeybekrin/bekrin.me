import Link from 'next/link';
import { withRouter } from 'next/router';
import { string, any, bool } from 'prop-types';
import { style, classes } from 'typestyle';
import palette from '~/styles/palette';
import { mobile } from '~/styles/media';

const styles = {
  item: style({
    alignItems: 'center',
    display: 'flex',
    verticalAlign: 'middle',
    justifyContent: 'center',
    margin: '0 1.5em',
    fontSize: 18,
  }, mobile({
    margin: 0,
  })),
  link: style({
    transition: 'color 200ms ease',
    textDecoration: 'none',
    color: palette('blue'),
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    $nest: {
      '&:active': {
        outline: 'none',
      },
      '&:hover': {
        color: palette('red'),
      },
    },
  }),
  linkActive: style({
    color: palette('gray', '700'),
    cursor: 'default',

    // Prevent hover style for :active
    $nest: {
      '&&:hover': {
        color: palette('gray', '700'),
      },
    },
  }),
};

const MenuItem = ({ href, label, isActive }) => (
  <span className={styles.item}>
    <Link href={href} prefetch>
      <a
        className={classes(
          styles.link,
          isActive && styles.linkActive
        )}
      >{label}</a>
    </Link>
  </span>
);

/* eslint-disable react/display-name, react/prop-types */
const withActiveFlag = Target => props => (
  <Target {...props} isActive={props.router.pathname === props.href} />
);
/* eslint-enable */

MenuItem.propTypes = {
  href: string.isRequired,
  label: any.isRequired,
  isActive: bool.isRequired,
};

export default withRouter()(withActiveFlag(MenuItem));
