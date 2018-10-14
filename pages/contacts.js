import Layout from '~/components/layout';
import Heading from '~/components/heading';
import Section from '~/components/section';
import Link from '~/components/link';
import Text from '~/components/text';

export default () => (
  <Layout title="Contacts">
    <Section>
      <Heading bold>Social &amp; contacts</Heading>
      <Text intro>
        Whether you want to discuss something or just say hi, feel free to{' '}
        <Link href="mailto:sergey@bekrin.me" trackAs="email">
          drop an email
        </Link>{' '}
        or start a{' '}
        <Link href="//telegram.me/sbekrin" trackAs="telegram" nowrap>
          chat in Telegram
        </Link>{' '}
        messenger. I occasinally share (mostly urban) photos{' '}
        <Link href="//www.instagram.com/sbekrin/" trackAs="instagram" nowrap>
          on Instagram
        </Link>{' '}
        and retweet non-serius stuff{' '}
        <Link href="//twitter.com/sergeybekrin" trackAs="twitter" nowrap>
          on Twitter
        </Link>
        . I don't have a SoundCloud, but you can follow me{' '}
        <Link href="//github.com/sergeybekrin" trackAs="github" nowrap>
          on GitHub
        </Link>
        .
      </Text>
    </Section>
  </Layout>
);
