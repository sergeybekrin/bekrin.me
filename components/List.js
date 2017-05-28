import { classes, style } from 'typestyle';
import { tablet } from '~/styles/media';

const styles = {
  list: style({
    margin: '1em 0',
    padding: 0,
    listStyle: 'none',
  }, tablet({
    fontSize: 18,
  })),
  marked: style({
    content: '\\2014',
  }),
};

const List = ({ marked, children }) => (
  <ul className={classes(styles.list, marked && styles.marked)}>{children}</ul>
);

export default List;
