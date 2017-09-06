import Layout from '~/components/layout';
import Heading from '~/components/heading';
import Section from '~/components/section';
import Link from '~/components/link';
import Text from '~/components/text';
import GitHubIcon from '~/components/icon/github';
import TwitterIcon from '~/components/icon/twitter';
import TelegramIcon from '~/components/icon/telegram';

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
        Want to discuss something or go out for a coffee? Feel free to drop an
        email to {EmailLink}. You can follow my open-source activity on{' '}
        {GitHubLink}, check funny dev stuff I retweet on {TwitterLink}, and chat
        on {TelegramLink} messenger.
      </Text>
    </Section>
  </Layout>
);

export default Contacts;
