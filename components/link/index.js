import { bool, any } from 'prop-types';
import styled, { css } from 'styled-components';

const Link = styled.a`
  color: ${props => props.theme.blue};
  text-decoration: none;
  transition: color 200ms ease;
  white-space: ${props => (props.nowrap ? 'nowrap' : 'normal')};

  &:hover {
    color: ${props => props.theme.red};
  }
`;

Link.propTypes = {
  nowrap: bool,
  children: any,
};

export default Link;
