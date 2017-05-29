import { style, classes } from 'typestyle';
import { any, string, bool } from 'prop-types';
import { tablet } from '~/styles/media';

const styles = {
  text: style({
    margin: '1em 0',
    lineHeight: 1.75,
  }, tablet({
    fontSize: 18,
    lineHeight: 1.5,
  })),
  heading: style({
    fontWeight: 500,
    fontSize: 36,
    lineHeight: 1.5,
  }, tablet({
    fontSize: 26,
  })),
};

const Text = ({ className, heading, children }) => {
  if (heading) {
    return (
      <h3
        className={classes(className, styles.text, styles.heading)}
      >{children}</h3>
    );
  }

  return (
    <p
      className={classes(className, styles.text)}
    >{children}</p>
  );
};

Text.propTypes = {
  className: string,
  heading: bool,
  children: any,
};

export default Text;
