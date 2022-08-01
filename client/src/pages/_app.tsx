import '@/styles/globals.css';

import classNames from 'classnames';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { Header, Footer } from '@/components';
import { useHttpClient } from '@/hooks';

function App(props: AppProps) {
  const httpClient = useHttpClient();

  return (
    <SWRConfig value={{ fetcher: httpClient.get, errorRetryCount: 0 }}>
      <Header />
      <main className=" min-h-[calc(100vh-313px)] max-w-4xl xl:mx-auto">
        <div className={classNames(' overflow-y-auto')}>
          <props.Component {...props.pageProps} />
        </div>
      </main>
      <Footer />
    </SWRConfig>
  );
}

export default App;
