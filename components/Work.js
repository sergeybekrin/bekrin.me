import { classes, style } from 'typestyle';
import { em } from 'csx';
import { mobile } from '~/styles/media';

const styles = {
  card: style({
    borderTopWidth: 3,
    borderTopStyle: 'solid',
    padding: 30,
    $nest: {
      '&:not(:last-of-type)': {
        marginBottom: 30,
      },
    },
  }, mobile({
    padding: '20px 10px',
  })),
  meta: style({
    fontSize: em(0.75),
  }),
};

const Work = ({ children, className, ...props }) => (
  <div className={classes(styles.card, className)} {...props}>
    {children}
  </div>
);

export default Work;
