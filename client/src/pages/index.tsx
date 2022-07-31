import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

import { Footer, Header } from '@/components';

import type { NextPage } from 'next';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <Head>
        <title>Airweb | {t`E-shop`}</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.png" rel="icon" />
      </Head>

      <Header />
      <main className=" min-h-[calc(100vh-277px)]">
        <h1>{t`Hello evryone`}</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
