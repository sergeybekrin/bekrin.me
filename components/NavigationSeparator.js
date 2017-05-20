import { style } from 'typestyle';
import palette from '~/styles/palette';

const styles = {
    separator: style({
        backgroundColor: palette('gray', 200),
        height: '2.25rem',
        width: 2
    })
};

export default () => (
    <span className={styles.separator} aria-hidden="true" />
);
