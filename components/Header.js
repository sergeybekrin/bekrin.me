import styled from 'styled-components';
import media from '~/media';

const Header = styled.header`
  padding: 1.5rem 10vmin;

  ${media.phone`
    padding: 0.75rem 5vmin;
  `};
`;

export default Header;
