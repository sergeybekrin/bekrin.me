import styled from 'styled-components';
import media from '~/styles/media';
import Heading from '~/components/Heading';
import Section from '~/components/Section';
import Work from '~/components/Work';
import Text from '~/components/Text';
import Link from '~/components/Link';
import GridDynamicsIcon from '~/components/GridDynamicsIcon';
import NopresetIcon from '~/components/NopresetIcon';

const Sup = styled.sup`
  color: #666;
  font-size: 18px;
  vertical-align: text-top;
  font-style: italic;
  white-space: nowrap;

  ${media.tablet`
    font-size: 14px;
  `}
`;

// const styles = {
//   heading: style({
//     margin: 0,
//   }),
//   sup: style({
//     color: '#666',
//     fontSize: 18,
//     verticalAlign: 'text-top',
//     fontStyle: 'italic',
//     whiteSpace: 'nowrap',
//   }, tablet({
//     fontSize: 14,
//   })),
//   icon: style({
//     verticalAlign: -2,
//     marginRight: 4,
//     width: 30,
//     height: 30,
//   }, tablet({
//     width: 20,
//     height: 20,
//   })),
//   griddynamics: style({
//     border: 'none',
//     $nest: {
//       '&::before': {
//         position: 'absolute',
//         width: percent(100),
//         left: 0,
//         top: 0,
//         marginTop: -3,
//         backgroundColor: '#f79521',
//         backgroundImage: `linear-gradient(
//           to right,
//           #0172bc 0%,
//           #f26633 50%,
//           #f79521 100%
//         )`,
//         height: 3,
//         display: 'block',
//         content: '""',
//       },
//     },
//   }),
//   nopreset: style({
//     borderColor: '#0d45c3',
//   }),
// };

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

const WorkSection = () => (
  <Section>
    <Work>
      <Heading>
        Currently I work as a UI Developer at {GDLink}, an outsourcing{' '}
        company <Sup>Oct 2015 &ndash; present</Sup>
      </Heading>
      <Text>
        At there I worked with wide variety of projects for companies such{' '}
        as{' '}
        <i>cloud-based phone systems</i>{' '}
        <Link
          href="//ringcentral.com"
          trackAs="ringcentral"
        >RingCentral</Link>,{' '}
        <i>ads analysis platform</i>{' '}
        <Link
          href="//integralads.com"
          trackAs="integralads"
        >Integral Ad Science</Link>,{' '}
        <i>investment bank</i>{' '}
        <Link
          href="//svb.com"
          trackAs="svb"
        >Silicon Valley Bank</Link>,{' '}
        and{' '}
        <Link
          href="//macys.com"
          trackAs="macys"
        >Macy&apos;s</Link> <i>retailer</i>.
      </Text>
    </Work>
    <Work>
      <Heading>
        At {NopresetLink} digital agency I was playing roles of both backend and
        frontend engineer <Sup>June 2014 &ndash; Oct 2015</Sup>
      </Heading>
      <Text>
        We did lots of websites for local businesses of any size and kind.
        As part of small and dynamic team I worked on projects like{' '}
        <i>agricultural machinery dealer</i>{' '}
        <Link
          href="//mirtech.ru"
          trackAs="mirtech"
        >Mirtech</Link>{' '}
        <i>(2015)</i>,{' '}
        <i>security systems solutions provider</i>{' '}
        <Link
          href="//centrsb.ru"
          trackAs="csb"
        >CSB</Link>{' '}
        <i>(2015)</i>, and{' '}
        <i>power systems engineering company</i>{' '}
        <Link
          href="//energoin.com"
          trackAs="energoinvest"
        >Energoinvest</Link> <i>(2014)</i>.
      </Text>
    </Work>
  </Section>
);

export default WorkSection;
