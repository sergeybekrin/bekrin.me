import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class Root extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>{styleTags}</Head>
        <body>
          <div data-approot>{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
