import styled from 'styled-components';
import media from '~/styles/media';
import palette from '~/styles/palette';

const Header = styled.header`
  padding: 1.5rem 10vmin;
  color: ${palette('white')};

  ${media.phone`
    padding: 0.75rem 5vmin;
  `}
`;

export default Header;
