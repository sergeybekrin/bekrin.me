import Layout from '~/components/Layout';
import ErrorPage from '~/components/ErrorPage';

const NotFound = () => (
    <Layout>
        <ErrorPage message={'404'} />
    </Layout>
);

export default NotFound;
