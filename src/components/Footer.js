import styled from 'styled-components';
import media from '~/styles/media';
import palette from '~/styles/palette';

const Footer = styled.footer`
  text-align: center;
  padding: 5vmin 10vmin;
  background-color: ${palette('white')};
  color: ${palette('gray', '500')};

  ${media.tablet`
    font-size: 18px;
  `}
`;

export default Footer;
