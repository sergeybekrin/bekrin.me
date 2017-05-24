import Layout from '~/components/Layout';
import ErrorPage from '~/components/ErrorPage';

const NotFound = () => (
    <Layout title="404">
        <ErrorPage message="404" />
    </Layout>
);

export default NotFound;
