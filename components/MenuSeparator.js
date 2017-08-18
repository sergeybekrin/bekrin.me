import styled from 'styled-components';
import palette from '~/styles/palette';

const MenuSeparator = styled.span.attrs({
  'aria-hidden': true,
})`
  background-color: ${palette('gray', 200)};
  height: 2.25rem;
  width: 2px;
`;

export default MenuSeparator;
