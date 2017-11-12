import styled from 'styled-components';
import { string } from 'prop-types';
import Layout from '~/components/layout';
import Heading from '~/components/heading';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ErrorSection = ({ message }) => (
  <Layout title={message}>
    <Container>
      <Heading level={1} bold>
        {'\ud83d\ude31'} {message}
      </Heading>
    </Container>
  </Layout>
);

ErrorSection.propTypes = {
  message: string.isRequired,
};

export default ErrorSection;
