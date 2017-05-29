import { node } from 'prop-types';
import { style } from 'typestyle';
import { mobile } from '~/styles/media';

const styles = {
  content: style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '0 10vmin',
  }, mobile({
    padding: '0 5vmin',
  })),
};

const Content = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

Content.propTypes = {
  children: node.isRequired,
};

export default Content;
