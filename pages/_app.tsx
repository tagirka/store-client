import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppContextProvider } from '../context/app.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="wrapper">
      <Head>
        <title>Pizza store</title>
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}

export default MyApp;
