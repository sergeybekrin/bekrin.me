import styled from 'styled-components';
import media from '~/media';
import Heading from '~/components/heading';
import Section from '~/components/section';
import Work from '~/components/work';
import Text from '~/components/text';
import Link from '~/components/link/external';
import GridDynamicsIcon from '~/components/icon/griddynamics';
import NopresetIcon from '~/components/icon/nopreset';
import Layout from '~/components/layout';
import Profile from '~/components/profile';

const Sup = styled.sup`
  color: #666;
  font-size: 18px;
  vertical-align: text-top;
  font-style: italic;
  white-space: nowrap;

  ${media.tablet`
    font-size: 14px;
  `};
`;

const GDLink = (
  <Link href="//griddynamics.com" trackAs="griddynamics" nowrap>
    <GridDynamicsIcon /> Grid Dynamics
  </Link>
);

const NopresetLink = (
  <Link href="//nopreset.ru" trackAs="nopreset" nowrap>
    <NopresetIcon /> nopreset
  </Link>
);

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
          width={150}
          height={150}
        />
      </Profile.Card>
      <Text hero>
        JavaScript engineer who cares about both external project quality and
        developer experience. Always open to support, share & learn. Traveling
        and contributing to open source in free time.
      </Text>
    </Section>
    <Section>
      <hr />
      <Work>
        <Heading>
          Currently I work as a UI Developer at {GDLink}, an outsourcing company{' '}
          <Sup>Oct 2015 &ndash; present</Sup>
        </Heading>
        <Text>
          At there I worked with wide variety of projects for companies such as{' '}
          <i>cloud-based phone systems</i>{' '}
          <Link href="//ringcentral.com" trackAs="ringcentral">
            RingCentral
          </Link>, <i>ads analysis platform</i>{' '}
          <Link href="//integralads.com" trackAs="integralads">
            Integral Ad Science
          </Link>, <i>investment bank</i>{' '}
          <Link href="//svb.com" trackAs="svb">
            Silicon Valley Bank
          </Link>, and{' '}
          <Link href="//macys.com" trackAs="macys">
            Macy&apos;s
          </Link>{' '}
          <i>retailer</i>.
        </Text>
      </Work>
      <hr />
      <Work>
        <Heading>
          At {NopresetLink} digital agency I was playing roles of both backend
          and frontend engineer <Sup>June 2014 &ndash; Oct 2015</Sup>
        </Heading>
        <Text>
          We did lots of websites for local businesses of any size and kind. As
          part of small and dynamic team I worked on projects like{' '}
          <i>agricultural machinery dealer</i>{' '}
          <Link href="//mirtech.ru" trackAs="mirtech">
            Mirtech
          </Link>{' '}
          <i>(2015)</i>, <i>security systems solutions provider</i>{' '}
          <Link href="//centrsb.ru" trackAs="csb">
            CSB
          </Link>{' '}
          <i>(2015)</i>, and <i>power systems engineering company</i>{' '}
          <Link href="//energoin.com" trackAs="energoinvest">
            Energoinvest
          </Link>{' '}
          <i>(2014)</i>.
        </Text>
      </Work>
    </Section>
  </Layout>
);

export default Home;
