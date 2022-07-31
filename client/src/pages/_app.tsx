import '@/styles/globals.css';

import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { Header, Footer } from '@/components';
import { useHttpClient } from '@/hooks';

function App(props: AppProps) {
  const { t } = useTranslation('home');
  const httpClient = useHttpClient();

  return (
    <SWRConfig value={{ fetcher: httpClient.get, errorRetryCount: 0 }}>
      <Header />
      <main className=" min-h-[calc(100vh-277px)]">
        <h1>{t`Hello evryone`}</h1>
      </main>
      <props.Component {...props.pageProps} />
      <Footer />
    </SWRConfig>
  );
}

export default App;
