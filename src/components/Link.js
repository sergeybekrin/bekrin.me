import NextLink from 'next/link';
import { string, bool } from 'prop-types';
import styled, { css } from 'styled-components';
import { OutboundLink } from 'react-ga';
import palette from '~/styles/palette';

const Link = ({ href, trackAs, ...props }) => {
  const extra = trackAs ? { to: href, eventLabel: trackAs } : { href };
  const Tag = trackAs ? OutboundLink : 'a';
  const child = <Tag {...props} {...extra} />;
  return trackAs ? child : <NextLink href={href}>{child}</NextLink>;
};

const StyledLink = styled(Link)`
  color: ${palette('blue')};
  text-decoration: none;
  transition: color 200ms ease;

  &:hover {
    color: ${palette('red')};
  }

  ${props => props.nowrap && css`
    white-space: nowrap;
  `}
`;

Link.propTypes = {
  href: string,
  nowrap: bool,
  trackAs: string,
};

export default StyledLink;
