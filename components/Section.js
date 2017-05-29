import { any } from 'prop-types';
import { style } from 'typestyle';
import csstips from 'csstips';

const styles = {
  container: style(
    csstips.horizontal,
    csstips.flex,
    csstips.centerJustified,
  ),
  content: style(csstips.flex1, {
    maxWidth: 758,
  }),
};

const Section = ({ children, ...props }) => (
  <div className={styles.container}>
    <div className={styles.content} {...props}>{children}</div>
  </div>
);

Section.propTypes = {
  children: any.isRequired,
};

export default Section;
