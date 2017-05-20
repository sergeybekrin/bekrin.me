import { style } from 'typestyle';
import NavigationItem from '~/components/NavigationItem';
import NavigationSeparator from '~/components/NavigationSeparator';
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

export default () => (
    <nav className={styles.navigation}>
        <NavigationItem label="About me" to="/" />
        <NavigationSeparator />
        <NavigationItem label="Projects" to="/projects" />
        <NavigationSeparator />
        <NavigationItem label="Contacts" to="/contacts" />
    </nav>
);
