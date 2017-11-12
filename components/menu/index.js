import styled from 'styled-components';
import media from '~/media';

const Menu = styled.nav`
  display: flex;
  min-height: 2.5rem;

  ${media.phone`
    justify-content: space-between;
  `};
`;

export default Menu;
