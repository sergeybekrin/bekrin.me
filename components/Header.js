import { style } from 'typestyle';
import Navigation from '~/components/Navigation';
import palette from '~/styles/palette';
import { mobile } from '~/styles/media';

const styles = {
    header: style({
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '1.5em 10vmin',
        color: palette('white')
    }, mobile({
        padding: '1em 0'
    }))
};

export default () => (
    <header className={styles.header}>
        <Navigation />
    </header>
);
