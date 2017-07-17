import Footer from '~/components/Footer';
import Link from '~/components/Link';

const FooterContainer = () => (
  <Footer>
    Last update {process.env.LAST_UPDATE_DATE}<span> &bull; </span>
    <Link
      href="//github.com/sergeybekrin/bekrin.me"
      trackAs="github-source"
    >View&nbsp;source</Link>
  </Footer>
);

export default FooterContainer;
