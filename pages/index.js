import Heading from '~/components/heading';
import Section from '~/components/section';
import Work from '~/components/work';
import Text from '~/components/text';
import Link from '~/components/link/external';
import ResearchGateIcon from '~/components/icon/researchgate';
import GridDynamicsIcon from '~/components/icon/griddynamics';
import NopresetIcon from '~/components/icon/nopreset';
import Layout from '~/components/layout';
import Sup from '~/components/sup';
import Nowrap from '~/components/nowrap';
import Profile from '~/components/profile';

export default () => (
  <Layout itemScope itemType="http://schema.org/Person">
    <Section>
      <Profile.Card>
        <Heading bold>
          👋 Hey, I'm Sergey Bekrin{' '}
          <Profile.Picture
            src="/static/userpic.png"
            alt="Sergey's photo"
            width={40}
            height={40}
          />
        </Heading>
        <Text intro>
          I'm a JavaScript engineer who appreciates thoughtful products and
          great developer experience. Aside of code, I love to travel, explore
          urban neighborhoods, and try new food.
        </Text>
      </Profile.Card>
      <Work>
        <Sup>
          <Nowrap>Berlin, Germany</Nowrap> &#xb7;{' '}
          <Nowrap>Sep 2017 &ndash; present</Nowrap>
        </Sup>
        I work as a <span itemProp="jobTitle">Senior Software Engineer</span> at{' '}
        <Link
          href="//researchgate.net"
          trackAs="researchgate"
          itemProp="url"
          nowrap
        >
          <ResearchGateIcon /> <span itemProp="name">ResearchGate</span>
        </Link>
        . As part of <i>Frontend Infrastructure</i> team, we enable company to
        effectively ship great product. Before that, I was helping with
        technology behind internal design system and tooling around it in{' '}
        <i>Design Systems</i> team.
      </Work>
      <Work>
        <Sup>
          <Nowrap>San Francisco, CA, US</Nowrap> &#xb7;{' '}
          <Nowrap>Saratov, Russia</Nowrap> &#xb7;{' '}
          <Nowrap>Oct 2015 &ndash; Aug 2017</Nowrap>
        </Sup>
        In the outsourcing company{' '}
        <Link href="//griddynamics.com" trackAs="griddynamics" nowrap>
          <GridDynamicsIcon /> Grid Dynamics
        </Link>
        , <Nowrap>I worked</Nowrap> as UI Developer. At there I worked on wide
        variety of projects for companies such as{' '}
        <i>cloud-based phone systems</i>{' '}
        <Link href="//ringcentral.com" trackAs="ringcentral">
          RingCentral
        </Link>
        , <i>ads analysis platform</i>{' '}
        <Link href="//integralads.com" trackAs="integralads">
          Integral Ad Science
        </Link>
        , <i>investment bank</i>{' '}
        <Link href="//svb.com" trackAs="svb">
          Silicon Valley Bank
        </Link>
        , and{' '}
        <Link href="//macys.com" trackAs="macys">
          Macy&apos;s
        </Link>{' '}
        <i>retailer</i>.
      </Work>
      <Work>
        <Sup>
          <Nowrap>Saratov, Russia</Nowrap> &#xb7;{' '}
          <Nowrap>June 2014 &ndash; Oct 2015</Nowrap>
        </Sup>
        At{' '}
        <Link href="//nopreset.ru" trackAs="nopreset" nowrap>
          <NopresetIcon /> nopreset
        </Link>{' '}
        digital agency I was playing roles of both backend and frontend
        engineer. As part of small and dynamic team, I worked on projects like{' '}
        <i>agricultural machinery dealer</i>{' '}
        <Link href="//mirtech.ru" trackAs="mirtech">
          Mirtech
        </Link>
        , <i>security systems solutions provider</i>{' '}
        <Link href="//centrsb.ru" trackAs="csb">
          CSB
        </Link>
        , and <i>power systems engineering company</i>{' '}
        <Link href="//energoin.com" trackAs="energoinvest">
          Energoinvest
        </Link>
        .
      </Work>
    </Section>
  </Layout>
);
