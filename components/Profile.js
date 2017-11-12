import styled from 'styled-components';
import Heading from '~/components/heading';
import media from '~/media';

const Picture = styled.img`
  border-radius: 50%;

  ${media.tablet`
    width: 108px;
    height: 108px;
  `};

  ${media.phone`
    order: -1;
    margin-right: 30px;
    margin-bottom: 10px;
  `};
`;

const Headline = styled(Heading).attrs({ bold: true })`
  letter-spacing: -0.25rem;
  font-size: 3.5rem;
  line-height: 1.35;

  ${media.desktop`
    margin-right: 10px;
  `};

  ${media.tablet`
    font-size: 3rem;
  `};

  ${media.phone`
    letter-spacing: -0.15rem;
    font-size: 2rem;
  `};
`;

const Card = styled.div`
  display: flex;
  flex-direction: fow;
  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
  `};
`;

export default { Card, Picture, Headline };