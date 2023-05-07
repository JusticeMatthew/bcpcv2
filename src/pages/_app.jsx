import '@/styles/globals.css';
import Head from 'next/head';
import { Layout } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>B&C Pest Control</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta
          name="description"
          content="B&C Pest Control. Once-a-year service in Central Florida (West Volusia, Seminole, and Brevard Counties)"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <meta property="og:title" content="B&C Pest Control" />
        <meta
          property="og:description"
          content="B&C Pest Control. Once-a-year service in Central Florida (West Volusia, Seminole, and Brevard Counties)"
        />
        <meta property="og:image" content="/og-logo.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
