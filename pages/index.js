import Layout from '~/containers/Layout';
import Text from '~/components/Text';
import Section from '~/components/Section';
import Profile from '~/components/Profile';
import WorkSection from '~/components/WorkSection';

const Home = () => (
  <Layout>
    <Section itemScope itemType="http://schema.org/Person">
      <Profile.Card>
        <Profile.Headline>
          <span itemProp="givenName">Sergey</span>&nbsp;
          <span itemProp="familyName">Bekrin</span>, <br />
          a Software Engineer
        </Profile.Headline>
        <Profile.Picture
          src="/static/userpic.png"
          alt="Sergey Bekrin"
          itemProp="image"
          width={162}
          height={162}
        />
      </Profile.Card>
      <Text hero>
        JavaScript engineer who cares about both external project quality
        and developer experience. Always open to support, share & learn.
        Traveling and contributing to open source in free time.
      </Text>
    </Section>
    <WorkSection />
  </Layout>
);

export default Home;
