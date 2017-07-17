import Link from 'next/link';
import styled, { css } from 'styled-components';
import { withRoute } from 'next/router';
import { string, any, bool } from 'prop-types';
import palette from '~/styles/palette';
import media from '~/styles/media';

const Container = styled.span`
  align-items: center;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  margin: 0 1.5em;
  font-size: 18px;

  ${media.phone`
    margin: 0;
  `}

  a {
    transition: color 200ms ease;
    text-decoration: none;
    color: ${props => props.active ? palette('gray', '700') : palette('blue')};
    cursor: ${props => props.active ? 'default' : 'pointer'};
    font-weight: bold;
    white-space: nowrap;

    &:active {
      outline: none;
    }

    ${props => !props.active && css`
      &:hover {
        color: ${palette('red')};
      }
    `}
  }
`;

const MenuItem = ({ href, children, active }) => (
  <Container active={active}>
    <Link href={href} prefetch>
      <a>{children}</a>
    </Link>
  </Container>
);

/* eslint-disable react/display-name, react/prop-types */
const withActiveFlag = Target => props => (
  <Target {...props} active={props.route.pathname === props.href} />
);
/* eslint-enable */

MenuItem.propTypes = {
  href: string.isRequired,
  children: any.isRequired,
  active: bool.isRequired,
};

export default withRoute(withActiveFlag(MenuItem));
