import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <meta charSet='utf-8' />
          <meta key='theme-color' name='theme-color' content='#FFFFFF' />
          {/* <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-'
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
