import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';

import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';
import Header from '../components/Header/Header';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  axios.defaults.baseURL = 'http://dev.pixel.sc:1338';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pixel Assignment</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        {router.pathname !== '/sign-in' && <Header />}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
