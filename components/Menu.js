import { arrayOf, object } from 'prop-types';
import csstips from 'csstips';
import { style } from 'typestyle';
import MenuItem from '~/components/MenuItem';
import MenuSeparator from '~/components/MenuSeparator';
import { mobile } from '~/styles/media';

const styles = {
  navigation: style(
    csstips.horizontal,
    csstips.centerJustified,
    mobile({
      justifyContent: 'space-between',
      padding: '0 5vmin',
    })
  ),
};

const Menu = ({ items }) => (
  <nav className={styles.navigation}>
    {items.map(({ label, href }, index) => [
      index > 0 && <MenuSeparator />,
      <MenuItem key={href} label={label} href={href} />,
    ])}
  </nav>
);

Menu.propTypes = {
  items: arrayOf(object).isRequired,
};

export default Menu;
