import styled from 'styled-components';
import Heading from '~/components/heading';
import media from '~/media';

const Work = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;

  ${Heading} {
    color: ${props => props.theme.darkGray};
  }

  ${media.phone`
    margin-top: 1rem;
    margin-bottom: 1rem;
  `};
`;

export default Work;
