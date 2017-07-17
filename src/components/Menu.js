import styled from 'styled-components';
import media from '~/styles/media';

const Menu = styled.nav`
  display: flex;
  justify-content: center;

  ${media.phone`
    justify-content: space-between;
    padding: 0 5vmin;
  `}
`;

export default Menu;
