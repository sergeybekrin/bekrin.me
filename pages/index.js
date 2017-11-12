import styled from 'styled-components';
import media from '~/media';
import Heading from '~/components/heading';
import Section from '~/components/section';
import Work from '~/components/work';
import Text from '~/components/text';
import Link from '~/components/link/external';
import ResearchGateIcon from '~/components/icon/researchgate';
import GridDynamicsIcon from '~/components/icon/griddynamics';
import NopresetIcon from '~/components/icon/nopreset';
import Layout from '~/components/layout';
import Profile from '~/components/profile';
import Sup from '~/components/sup';
import Nowrap from '~/components/nowrap';

export default () => (
  <Layout itemScope itemType="http://schema.org/Person">
    <Section hero>
      <Profile.Card>
        <Profile.Headline>
          <span itemProp="givenName">Sergey</span>{' '}
          <span itemProp="familyName">Bekrin</span>, <br />
          a&nbsp;Software Engineer
        </Profile.Headline>
        <Profile.Picture
          src="/static/userpic.png"
          alt="Sergey Bekrin"
          itemProp="image"
          width={150}
          height={150}
        />
      </Profile.Card>
      <Text intro>
        JavaScript engineer who cares about both external project quality and
        developer experience. Always open to support, share &amp; learn.
        Traveling and contributing to open source in free time.
      </Text>
    </Section>
    <Section>
      <Work>
        <Heading bold>
          I work as <span itemProp="jobTitle">UX Engineer</span> at{' '}
          <span
            itemProp="worksFor"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <Link
              href="//researchgate.net"
              trackAs="researchgate"
              itemProp="url"
              nowrap
            >
              <ResearchGateIcon /> <span itemProp="name">ResearchGate</span>
            </Link>, a{' '}
            <span itemProp="description">
              social network for scientists and researchers
            </span>{' '}
          </span>
          <Sup>
            <Nowrap>Berlin, Germany</Nowrap> &bull;{' '}
            <Nowrap>Sep 2017 &ndash; present</Nowrap>
          </Sup>
        </Heading>
        <Text>
          In <i>Design System Team</i> we take care of technology behind
          internal design systems, tooling around it, communication with product
          teams, and R&amp;D.
        </Text>
      </Work>
      <Work>
        <Heading bold>
          In an outsourcing company{' '}
          <Link href="//griddynamics.com" trackAs="griddynamics" nowrap>
            <GridDynamicsIcon /> Grid Dynamics
          </Link>{' '}
          I worked as UI Developer{' '}
          <Sup>
            <Nowrap>Oct 2015 &ndash; Aug 2017 &bull; </Nowrap>
            <Nowrap>Saratov, Russia</Nowrap> &amp;{' '}
            <Nowrap>San Francisco, CA, US</Nowrap>
          </Sup>
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
      <Work>
        <Heading bold>
          At{' '}
          <Link href="//nopreset.ru" trackAs="nopreset" nowrap>
            <NopresetIcon /> nopreset
          </Link>{' '}
          digital agency I was playing roles of both backend and frontend
          engineer <Sup>Saratov, Russia &bull; June 2014 &ndash; Oct 2015</Sup>
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
