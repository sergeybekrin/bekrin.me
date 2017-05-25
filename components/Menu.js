import { arrayOf, object } from 'prop-types';
import { style } from 'typestyle';
import MenuItem from '~/components/MenuItem';
import MenuSeparator from '~/components/MenuSeparator';
import { mobile } from '~/styles/media';

const styles = {
  navigation: style({
    justifyContent: 'center',
    display: 'flex',
  }, mobile({
    justifyContent: 'space-between',
    padding: '0 5vmin',
  })),
};

const Menu = ({ items }) => (
<<<<<<< HEAD
    <nav className={styles.navigation}>
        {items.map(({ label, href }, index) => [
            index > 0 && <MenuSeparator />,
            <MenuItem key={href} label={label} href={href} />
        ])}
    </nav>
=======
  <nav className={styles.navigation}>
    {items.map(({ label, href }, index) => [
      index > 0 && <MenuSeparator />,
      <MenuItem key={href} label={label} href={href} />,
    ])}
  </nav>
>>>>>>> a7b84ec8a9201986441e439566c34bd54d0ae2e2
);

Menu.propTypes = {
  items: arrayOf(object).isRequired,
};

export default Menu;
