import styled from 'styled-components';
import media from '~/styles/media';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10vmin;

  ${media.phone`
    padding: 0 5vmin;
  `}
`;

export default Content;
