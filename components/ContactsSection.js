import { style } from 'typestyle';
import { mobile, tablet } from '~/styles/media';
import Section from '~/components/Section';
import Link from '~/components/Link';
import Text, { Kinds } from '~/components/Text';
import GitHubIcon from '~/components/GitHubIcon';
import TwitterIcon from '~/components/TwitterIcon';
import TelegramIcon from '~/components/TelegramIcon';

const styles = {
  section: style({
    fontSize: 24,
  }, tablet({
    fontSize: 22,
  }), mobile({
    fontSize: 20,
  })),
  icon: style({
    width: 20,
  }, mobile({
    width: 18,
  })),
};

const EmailLink = (
  <Link href="mailto:sergey@bekrin.me" trackAs="email">
    sergey@bekrin.me
  </Link>
);

const GitHubLink = (
  <Link href="//github.com/sergeybekrin" trackAs="github" nowrap>
    <GitHubIcon className={styles.icon} /> GitHub
  </Link>
);

const TwitterLink = (
  <Link href="//twitter.com/sergeybekrin" trackAs="twitter" nowrap>
    <TwitterIcon className={styles.icon} /> Twitter
  </Link>
);

const TelegramLink = (
  <Link href="//telegram.me/sbekrin" trackAs="telegram" nowrap>
    <TelegramIcon className={styles.icon} /> Telegram
  </Link>
);

const ContactsSection = () => (
  <Section className={styles.section}>
    <Text kind={Kinds.title} bold>Social &amp; contacts</Text>
    <Text>
      Want to discuss something or go out for a coffee? Feel free to{' '}
      drop an email to {EmailLink}.{' '}
      You can follow my open-source activity on {GitHubLink}, check{' '}
      funny dev stuff I retweet on {TwitterLink}, and chat on{' '}
      {TelegramLink} messenger.
    </Text>
  </Section>
);

export default ContactsSection;
