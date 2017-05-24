import { arrayOf, object } from 'prop-types';
import { style } from 'typestyle';
import MenuItem from '~/components/MenuItem';
import MenuSeparator from '~/components/MenuSeparator';
import { mobile } from '~/styles/media';

const styles = {
    navigation: style({
        justifyContent: 'center',
        display: 'flex'
    }, mobile({
        justifyContent: 'space-between',
        padding: '0 5vmin'
    }))
};

const Menu = ({ items }) => (
    <nav className={styles.navigation}>
        {items.map(({ label, href }, index) => [
            index > 0 && <MenuSeparator />,
            <MenuItem label={label} href={href} />
        ])}
    </nav>
);

Menu.propTypes = {
    items: arrayOf(object).isRequired
};

export default Menu;
