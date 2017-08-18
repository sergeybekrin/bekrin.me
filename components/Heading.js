import { createElement } from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import media from '~/styles/media';

const Component = ({ level = 2, ...props }) =>
  createElement(`h${level}`, props);

const Heading = styled(Component)`
  font-weight: ${props => props.bold ? 600 : 500};
  font-size: 36px;
  line-height: 1.5;
  margin: 0;
  letter-spacing: ${props => props.bold ? -2 : 0}px;

  ${media.tablet`
    font-size: 26px;
    letter-spacing: ${props => props.bold ? -1 : 0}px;
  `}
`;

Heading.propTypes = {
  level: oneOf([ 1, 2 ]),
};

export default Heading;
