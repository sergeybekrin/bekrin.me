import styled from 'styled-components';
import media from '~/styles/media';
import palette from '~/styles/palette';

const Header = styled.header`
  padding: 1.5em 10vmin;
  color: ${palette('white')};

  ${media.phone`
    padding: 1em 0;
  `}
`;

export default Header;
