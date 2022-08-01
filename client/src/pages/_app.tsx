import '@/styles/globals.css';
import '@/styles/toastify.css';

import { useMemo } from 'react';

import classNames from 'classnames';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';

import { Header, Footer } from '@/components';
import { CartContext } from '@/contexts';
import { useCart, useHttpClient } from '@/hooks';

function App(props: AppProps) {
  const httpClient = useHttpClient();
  const { products, toggleAddProductToCart } = useCart();

  return (
    <SWRConfig value={{ fetcher: httpClient.get, errorRetryCount: 0 }}>
      <CartContext.Provider
        value={useMemo(
          () => ({ products, toggleAddProductToCart }),
          [products, toggleAddProductToCart]
        )}
      >
        <Header />
        <main className=" min-h-[calc(100vh-594px)] md:min-h-[calc(100vh-266px)] md:w-3/5 md:mx-auto">
          <div className={classNames(' overflow-y-auto')}>
            <props.Component {...props.pageProps} />
          </div>
        </main>
        <Footer />
      </CartContext.Provider>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </SWRConfig>
  );
}

export default App;
