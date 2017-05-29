import Layout from '~/components/Layout';
import ErrorSection from '~/components/ErrorSection';

const NotFound = () => (
  <Layout title="404">
    <ErrorSection message="404" />
  </Layout>
);

export default NotFound;
