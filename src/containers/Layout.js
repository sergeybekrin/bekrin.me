import { Component } from 'react';
import { any, string } from 'prop-types';
import ReactGA from 'react-ga';
import Head from 'next/head';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import { initialize } from 'react-ga';
import Header from '~/containers/Header';
import Content from '~/containers/Content';
import Footer from '~/containers/Footer';

injectGlobal`
  :root {
    -webkit-font-smoothing: antialiased;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    box-sizing: border-box;
    min-width: 320px;
    cursor: default;
  }

  body {
    margin: 0;
  }
`;

class Layout extends Component {
  static propTypes = {
    children: any.isRequired,
    title: string,
  };

  theme = {
  };

  state = {
    useAltFavicon: false,
  };

  toggleFavicon = () => {
    this.setState({ useAltFavicon: document.hidden });
  };

  triggerPageView = () => {
    if (!window.IS_GA_INITIALIZED) {
      window.IS_GA_INITIALIZED = true;
      initialize('UA-19088106-7', {
        debug: process.env.NODE_ENV === 'development',
      });
    }
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };

  componentDidMount() {
    document.addEventListener('visibilitychange', this.toggleFavicon);
    this.triggerPageView();
  }

  componentWillUnmount() {
    document.removeEventListener('visibilitychange', this.toggleFavicon);
  }

  renderFavicon(favicon) {
    return (
      <link rel="icon" type="image/png" href={`/static/${favicon}.png`} />
    );
  }

  render() {
    const { useAltFavicon } = this.state;
    const { title, children, ...props } = this.props;
    const formattedTitle = (
      title ?
      `${title} — Sergey Bekrin` :
      'Sergey Bekrin, a Software Engineer'
    );

    return (
      <ThemeProvider theme={this.theme}>
        <div {...props}>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{formattedTitle}</title>
            <link rel="dns-prefetch" href="//google-analytics.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            {this.renderFavicon(useAltFavicon ? 'favicon-alt' : 'favicon')}
          </Head>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default styled(Layout)`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
