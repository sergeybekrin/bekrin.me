import styled from 'styled-components';
import { string } from 'prop-types';
import Layout from '~/containers/Layout';
import Heading from '~/components/Text';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorSection = ({ message }) => (
  <Layout title={message}>
    <Container>
      <Heading bold>{'\ud83d\ude31'} {message}</Heading>
    </Container>
  </Layout>
);

ErrorSection.propTypes = {
  message: string.isRequired,
};

export default ErrorSection;
