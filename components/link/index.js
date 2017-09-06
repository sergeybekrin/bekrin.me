import { bool, any } from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

const Link = styled.a`
  color: ${props => props.theme.blue};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover {
    color: ${props => props.theme.red};
  }

  ${props => props.nowrap && css`white-space: nowrap;`};
`;

Link.propTypes = {
  nowrap: bool,
  children: any,
};

export default withTheme(Link);
