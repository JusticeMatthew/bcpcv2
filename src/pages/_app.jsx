import '@/styles/globals.css';
import Head from 'next/head';
import { Layout } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>B&C Pest Control</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="nofollow" />
        <meta name="description" content="B&C Pest Control Central Florida" />
        <meta property="og:title" content="B&C Pest Control" />
        <meta property="og:description" content="Insert good B&C thing" />
        <meta property="og:image" content="/header-logo.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
