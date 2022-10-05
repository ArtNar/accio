import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

export type OpenGraphConfigType = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const openGraphConfig: OpenGraphConfigType[] = [
  {
    title: 'Accio',
    description: 'accio...',
    image: '/images/accio.jpg',
    url: 'https://accio.com/',
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  const og = openGraphConfig[0];

  return (
    <>
      <Head>
        <title>{og.title}</title>
        <meta key='og:locale' property='og:locale' content='en_US' />
        <meta key='og:type' property='og:type' content='website' />
        <meta content='website' property='og:type' />
        <meta key='og:url' content={og.url} property='og:url' />
        <meta content='summary_large_image' name='twitter:card' />
        <meta content='!' name='fragment' />
        <meta key='og:site_name' content={og.title} property='og:site_name' />
        <meta key='og:image' content={og.image} property='og:image' />
        <meta key='og:title' content={og.title} property='og:title' />
        <meta
          key='og:description'
          content={og.description}
          property='og:description'
        />
        <meta name='twitter:title' content={og.title} />
        <meta name='twitter:description' content={og.description} />
        <meta name='twitter:image' content={og.image} />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
