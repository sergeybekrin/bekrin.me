import Layout from '~/containers/Layout';
import Heading from '~/components/Heading';
import Section from '~/components/Section';
import Link from '~/components/Link';
import Text from '~/components/Text';
import GitHubIcon from '~/components/GitHubIcon';
import TwitterIcon from '~/components/TwitterIcon';
import TelegramIcon from '~/components/TelegramIcon';

// const styles = {
//   section: style({
//     fontSize: 24,
//   }, tablet({
//     fontSize: 22,
//   }), mobile({
//     fontSize: 20,
//   })),
//   icon: style({
//     verticalAlign: -2,
//     width: 20,
//   }, mobile({
//     verticalAlign: -1,
//     width: 18,
//   })),
// };

const EmailLink = (
  <Link href="mailto:sergey@bekrin.me" trackAs="email">
    sergey@bekrin.me
  </Link>
);

const GitHubLink = (
  <Link href="//github.com/sergeybekrin" trackAs="github" nowrap>
    <GitHubIcon />&nbsp;GitHub
  </Link>
);

const TwitterLink = (
  <Link href="//twitter.com/sergeybekrin" trackAs="twitter" nowrap>
    <TwitterIcon />&nbsp;Twitter
  </Link>
);

const TelegramLink = (
  <Link href="//telegram.me/sbekrin" trackAs="telegram" nowrap>
    <TelegramIcon />&nbsp;Telegram
  </Link>
);

const Contacts = () => (
  <Layout title="Contacts">
    <Section>
      <Heading bold>Social &amp; contacts</Heading>
      <Text intro>
        Want to discuss something or go out for a coffee? Feel free to{' '}
        drop an email to {EmailLink}.{' '}
        You can follow my open-source activity on {GitHubLink}, check{' '}
        funny dev stuff I retweet on {TwitterLink}, and chat on{' '}
        {TelegramLink} messenger.
      </Text>
    </Section>
  </Layout>
);

export default Contacts;
