import styled, { withTheme } from 'styled-components';
import media from '~/media';

const Footer = styled.footer`
  text-align: center;
  padding: 5vmin 10vmin;
  color: ${props => props.theme.gray};

  ${media.tablet`
    font-size: 18px;
  `};
`;

export default withTheme(Footer);
