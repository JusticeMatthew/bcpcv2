import '@/styles/globals.css';
import Head from 'next/head';
import { Inter, Bebas_Neue, Zeyada } from 'next/font/google';
import { Layout } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});
const zeyada = Zeyada({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zeyada',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${bebas.variable} ${zeyada.variable}`}>
      <Head>
        <title>B&C Pest Control</title>
        <link rel="icon" href="/favicon.ico" />
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
    </main>
  );
}
