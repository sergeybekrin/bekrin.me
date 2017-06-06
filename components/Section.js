import { any, string } from 'prop-types';
import { style, classes } from 'typestyle';
import csstips from 'csstips';

const styles = {
  container: style(
    csstips.horizontal,
    csstips.flex,
    csstips.centerJustified,
  ),
  content: style(csstips.flex1, {
    maxWidth: 705,
  }),
};

const Section = ({ children, className, ...props }) => (
  <div className={classes(styles.container, className)}>
    <div className={styles.content} {...props}>{children}</div>
  </div>
);

Section.propTypes = {
  children: any.isRequired,
  className: string,
};

export default Section;
