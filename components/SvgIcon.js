import { string } from 'prop-types';
import styled from 'styled-components';
import media from '~/styles/media';

const SvgIcon = styled.svg`
  vertical-align: -0.25em;
  width: 1.25em;
  height: 1.25em;

  ${media.phone`
    vertical-align: -0.15em;
    width: 1em;
    height: 1em;
  `}
`;

SvgIcon.propTypes = {
  viewBox: string.isRequired,
};

export default SvgIcon;
