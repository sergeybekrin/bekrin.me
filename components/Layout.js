import { Component } from 'react';
import { any, string } from 'prop-types';
import Head from 'next/head';
import { cssRule, style, setStylesTarget } from 'typestyle';
import { setupPage } from 'csstips';
import { initialize } from 'react-ga';
import { px, viewHeight, viewWidth } from 'csx';
import Header from '~/components/Header';
import Content from '~/components/Content';
import Footer from '~/components/Footer';

const client = typeof window !== 'undefined';
const debug = process.env.NODE_ENV === 'production';

setupPage('[data-approot]');
cssRule(':root', {
  '-webkit-font-smoothing': 'antialiased',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: 20,
  lineHeight: 1.5,
  boxSizing: 'border-box',
  minWidth: px(320),
  cursor: 'default',
});

if (client) {
  initialize('UA-19088106-7', { debug });
}

const styles = {
  root: style({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    minHeight: viewHeight(100),
    width: viewWidth(100),
  }),
};

export default class Layout extends Component {
  static propTypes = {
    children: any.isRequired,
    title: string,
  };

  state = {
    useAltFavicon: false,
  };

  setAltFavicon = () => {
    this.setState({ useAltFavicon: document.hidden });
  };

  componentDidMount() {
    setStylesTarget(document.querySelector('[data-typestyle]'));
    document.addEventListener('visibilitychange', this.setAltFavicon);
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.setAltFavicon);
  }

  renderFavicon(favicon) {
    return (
      <link rel="icon" type="image/png" href={`/static/${favicon}.png`} />
    );
  }

  render() {
    const { useAltFavicon } = this.state;
    const title = (
      this.props.title ?
      `${this.props.title} — Sergey Bekrin` :
      'Sergey Bekrin, a Software Engineer'
    );

    return (
      <div data-approot className={styles.root}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <link rel="dns-prefetch" href="//google-analytics.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          {this.renderFavicon(useAltFavicon ? 'favicon-alt' : 'favicon')}
        </Head>
        <Header />
        <Content>{this.props.children}</Content>
        <Footer />
      </div>
    );
  }
}
