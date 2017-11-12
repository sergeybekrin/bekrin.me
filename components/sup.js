import styled from 'styled-components';
import media from '~/media';

const Sup = styled.sup`
  color: #666;
  font-size: 1rem;
  vertical-align: text-top;
  letter-spacing: 0;
  font-weight: normal;
  font-style: italic;
  display: block;

  ${media.tablet`
    font-size: 0.75rem;
  `};
`;

export default Sup;
