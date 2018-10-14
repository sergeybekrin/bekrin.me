import styled from 'styled-components';
import Text from '~/components/text';
import media from '~/media';

const Work = styled(Text).attrs({ intro: true })`
  margin-top: 2rem;

  ${media.phone`
    margin-top: 1rem;
  `};
`;

export default Work;
