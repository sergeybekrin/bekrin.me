import { style } from 'typestyle';
import { tablet } from '~/styles/media';
import Link from '~/components/Link';
import palette from '~/styles/palette';

const styles = {
  footer: style({
    textAlign: 'center',
    padding: '5vmin 10vmin',
    backgroundColor: palette('white'),
    color: palette('gray', '500'),
  }, tablet({
    fontSize: 18,
  })),
};

const Footer = () => (
  <footer className={styles.footer}>
    Last update {process.env.LAST_UPDATE_DATE}<span> &bull; </span>
    <Link
      href="//github.com/sergeybekrin/bekrin.me"
      eventLabel="github-source"
    >View source</Link>
  </footer>
);

export default Footer;
