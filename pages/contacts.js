import { withPageView } from 'react-ga';
import Layout from '~/components/Layout';
import ContactsSection from '~/components/ContactsSection';

const Contacts = () => (
  <Layout title="Contacts">
    <ContactsSection />
  </Layout>
);

export default withPageView(Contacts);
