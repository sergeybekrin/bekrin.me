import Heading from '~/components/heading';
import Section from '~/components/section';
import Work from '~/components/work';
import Text from '~/components/text';
import Link from '~/components/link/external';
import CirculaIcon from '~/components/icon/circula';
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
          👋 Hey, I'm Sergey{' '}
          <Profile.Picture
            src="/static/userpic.png"
            alt="Sergey's photo"
            width={40}
            height={40}
          />
        </Heading>
        <Text intro>
          I'm a <span itemProp="jobTitle">JavaScript engineer</span> who
          appreciates thoughtful products and great developer experience. Aside
          from code, I love to travel, cooking, and to explore urban
          neighborhoods.
        </Text>
      </Profile.Card>
      <Work>
        <Sup>
          <Nowrap>Berlin, Germany</Nowrap> &#xb7;{' '}
          <Nowrap>Jul 2019 &ndash; present</Nowrap>
        </Sup>
        Currently, I'm taking care of the web product at{' '}
        <Link href="//circula.com" trackAs="circula" itemProp="url" nowrap>
          <CirculaIcon /> <span itemProp="name">Circula</span>
        </Link>{' '}
        and helping the team with building the most effortless{' '}
        <i>expense management solution</i>, ensuring the best User Experience
        and supporting all departments within the company as a Lead Frontend
        Engineer.
      </Work>
      <Work>
        <Sup>
          <Nowrap>Berlin, Germany</Nowrap> &#xb7;{' '}
          <Nowrap>Sep 2017 &ndash; Jun 2019</Nowrap>
        </Sup>
        I worked as a Senior Software Engineer at{' '}
        <Link
          href="//researchgate.net"
          trackAs="researchgate"
          itemProp="url"
          nowrap
        >
          <ResearchGateIcon /> ResearchGate
        </Link>
        . As part of <i>Frontend Infrastructure</i> team, we enabled the company
        to effectively ship a great product. Before that, I was helping with the
        technology behind internal design system and tooling around it in the{' '}
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
        , <Nowrap>I worked</Nowrap> as a UI Developer. At there I worked on a
        wide variety of projects for companies such as{' '}
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
        digital agency, I was playing roles of both backend and frontend
        engineer. As part of a small and dynamic team, I worked on projects like{' '}
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
