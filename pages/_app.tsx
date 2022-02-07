import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { getCookie } from 'cookies-next';
import { Provider } from 'react-redux';

import { getUserData } from '../api/main';
import { store } from '../app/store';

import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [userName, setUserName] = useState('');

  const router = useRouter();
  const token = getCookie('token');

  useEffect(() => {
    if (token) {
      getUserData(token).then(res => {
        setUserName(res.data.username);
      });
    }
  }, [token]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pixel Assignment</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          {router.pathname !== '/sign-in' && <Header>{userName}</Header>}
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
