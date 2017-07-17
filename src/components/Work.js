import styled from 'styled-components';
import media from '~/styles/media';

const Work = styled.div`
  border-top-width: 3px;
  border-top-style: solid;
  padding: 30px;
  margin-top: 30px;
  position: relative;

  ${media.phone`
    font-size: 0.75em;
  `}
`;

export default Work;
