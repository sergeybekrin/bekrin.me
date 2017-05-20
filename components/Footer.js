import { style } from 'typestyle';
import Link from '~/components/Link';
import palette from '~/styles/palette';

const styles = {
    footer: style({
        textAlign: 'center',
        padding: '5vmin 10vmin',
        backgroundColor: palette('white'),
        color: palette('gray', '500')
    })
};

export default () => (
    <footer className={styles.footer}>
        Last update {process.env.LAST_UPDATE_DATE}<span> &bull; </span>
        <Link
            to="//github.com/sergeybekrin/bekrin.me"
            eventLabel="github-source"
        >View source code</Link>
    </footer>
);
