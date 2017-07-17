import Header from '~/components/Header';
import Menu from '~/components/Menu';
import MenuItem from '~/components/MenuItem';
import MenuSeparator from '~/components/MenuSeparator';

const HeaderContainer = () => (
  <Header>
    <Menu>
      <MenuItem href="/">About me</MenuItem>
      <MenuSeparator />
      <MenuItem href="/projects">Projects</MenuItem>
      <MenuSeparator />
      <MenuItem href="/contacts">Contacts</MenuItem>
    </Menu>
  </Header>
);

export default HeaderContainer;
