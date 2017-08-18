import Header from '~/components/Header';
import Section from '~/components/Section';
import Menu from '~/components/Menu';
import MenuItem from '~/components/MenuItem';

const HeaderContainer = () => (
  <Header>
    <Section>
      <Menu>
        <MenuItem href="/">About me</MenuItem>
        <MenuItem href="/projects">Projects</MenuItem>
        <MenuItem href="/contacts">Contacts</MenuItem>
      </Menu>
    </Section>
  </Header>
);

export default HeaderContainer;
