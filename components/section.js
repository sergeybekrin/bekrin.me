import { any, string } from 'prop-types';
import styled, { css } from 'styled-components';
import media from '~/media';

const Content = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${props =>
    props.hero &&
    css`
      background-color: ${props.theme.blue};
      background-image: linear-gradient(
        to right bottom,
        ${props.theme.blue},
        ${props.theme.red}
      );
      border-radius: 0.25rem;
      padding: 5vmin;
      margin: 0 -5vmin;
      color: white;

      ${media.phone`
        border-radius: 0;
      `};
    `};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = props => (
  <Container>
    <Content {...props} />
  </Container>
);

Section.propTypes = {
  children: any.isRequired,
  className: string,
};

export default Section;
