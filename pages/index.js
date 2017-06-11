import { withPageView } from 'react-ga';
import Layout from '~/components/Layout';
import IntroSection from '~/components/IntroSection';
import WorkSection from '~/components/WorkSection';

const Home = () => (
  <Layout>
    <IntroSection />
    <WorkSection />
  </Layout>
);

export default withPageView(Home);
