import { style } from 'typestyle';
import Menu from '~/components/Menu';
import palette from '~/styles/palette';
import { mobile } from '~/styles/media';

const styles = {
  header: style({
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1.5em 10vmin',
    color: palette('white'),
  }, mobile({
    padding: '1em 0',
  })),
};

const Header = () => (
  <header className={styles.header}>
    <Menu
      items={[
        { label: 'About me', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contacts', href: '/contacts' },
      ]}
    />
  </header>
);

export default Header;
