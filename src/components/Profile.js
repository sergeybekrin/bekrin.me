import styled from 'styled-components';
import Heading from '~/components/Heading';
import media from '~/styles/media';

const Picture = styled.img`
  border-radius: 50%;
  margin-left: 20px;

  ${media.tablet`
    width: 108px;
    height: 108px;
  `}

  ${media.phone`
    order: -1;
    margin-left: 0;
    margin-right: 30;
    margin-bottom: 10;
  `}
`;

const Headline = styled(Heading).attrs({ bold: true })`
  letter-spacing: -0.06em;
  font-size: 3em;
  line-height: 1.35;

  ${media.tablet`
    letter-spacing: -0.06rem;
    font-size: 2em;
  `}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.phone`
    flex-direction: row;
  `}
`;

export default { Card, Picture, Headline };
