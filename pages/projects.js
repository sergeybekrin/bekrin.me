import { withPageView } from 'react-ga';
import Layout from '~/components/Layout';
import ProjectsSection from '~/components/ProjectsSection';

const Projects = () => (
  <Layout title="Projects">
    <ProjectsSection />
  </Layout>
);

export default withPageView(Projects);
