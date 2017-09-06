import styled, { css } from 'styled-components';
import { bool, any } from 'prop-types';
import media from '~/media';

const Text = styled.p`
  line-height: 1.75;
  margin: 1em 0;

  ${media.phone`
    line-height: 1.5;
  `} ${props => props.hero && css`color: #2e2e2e;`} ${props =>
      props.intro &&
      css`
        font-size: 1.25rem;

        ${media.tablet`
      font-size: 1rem;
    `};
      `};
`;

Text.propTypes = {
  hero: bool,
  intro: bool,
  children: any,
};

export default Text;
