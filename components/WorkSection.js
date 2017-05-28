import { style } from 'typestyle';
import { tablet } from '~/styles/media';
import Section from '~/components/Section';
import Work from '~/components/Work';
import Text from '~/components/Text';
import Link from '~/components/Link';
import GridDynamicsIcon from '~/components/GridDynamicsIcon';
import NopresetIcon from '~/components/NopresetIcon';

const styles = {
  heading: style({
    margin: 0,
  }),
  sup: style({
    color: '#666',
    fontSize: 18,
    verticalAlign: 'text-top',
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
  }, tablet({
    fontSize: 14,
  })),
  icon: style({
    verticalAlign: -1,
    marginRight: 4,
    width: 30,
    height: 30,
  }, tablet({
    width: 20,
    height: 20,
  })),
  griddynamics: style({
    borderColor: '#f7702b',
  }),
  nopreset: style({
    borderColor: '#0d45c3',
  }),
};

const GDLink = (
  <Link href="//griddynamics.com" eventLabel="griddynamics" nowrap>
    <GridDynamicsIcon className={styles.icon} />
    Grid Dynamics
  </Link>
);

const NopresetLink = (
  <Link href="//nopreset.ru" eventLabel="nopreset" nowrap>
    <NopresetIcon className={styles.icon} />
    nopreset
  </Link>
);

const WorkSection = () => (
  <Section>
    <Work className={styles.griddynamics}>
      <Text className={styles.heading} heading>
        Currently I work as a UI Developer at {GDLink}, an outsourcing{' '}
        company <sup className={styles.sup}>Oct 2015 &ndash; present</sup>
      </Text>
      <Text>
        At there I worked with wide variety of projects for companies such{' '}
        as{' '}
        <i>cloud-based phone systems</i>{' '}
        <Link
          href="//ringcentral.com"
          eventLabel="ringcentral"
        >RingCentral</Link>,{' '}
        <i>ads analysis platform</i>{' '}
        <Link
          href="//integralads.com"
          eventLabel="integralads"
        >Integral Ad Science</Link>,{' '}
        <i>investment bank</i>{' '}
        <Link
          href="//svb.com"
          eventLabel="svb"
        >Silicon Valley Bank</Link>,{' '}
        and{' '}
        <Link
          href="//macys.com"
          eventLabel="Macys"
        >Macy&apos;s</Link> <i>retailer</i>.
      </Text>
    </Work>
    <Work className={styles.nopreset}>
      <Text className={styles.heading} heading>
        At {NopresetLink} agency I was playing roles of both backend and
        frontend engineer <sup className={styles.sup}>June 2014 &ndash;{' '}
        Oct 2015</sup>
      </Text>
      <Text>
        We did lots of websites for local businesses of any size and kind.
        As part of small and dynamic team I worked on projects like{' '}
        <i>agricultural machinery dealer</i>{' '}
        <Link href="//mirtech.ru" eventLabel="mirtech">Mirtech</Link>{' '}
        <i>(2015)</i>,{' '}
        <i>security systems solutions provider</i>{' '}
        <Link href="//centrsb.ru" eventLabel="csb">CSB</Link>{' '}
        <i>(2015)</i>, and{' '}
        <i>power systems engineering company</i>{' '}
        <Link
          href="//energoin.com"
          eventLabel="energoinvest"
        >Energoinvest</Link> <i>(2014)</i>.
      </Text>
    </Work>
  </Section>
);

export default WorkSection;
