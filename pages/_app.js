import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { app } from '../firebase.config';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AuthContext from '../context/Auth/auth-context';
import Layout from '../components/layout/Layout';
app;

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const auth = getAuth();
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        router.replace('/auth?type=login');
        setUser(undefined);
      } else {
        setUser(user);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const AuthProvider = ({ children }) => {
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Head>
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="./favicon.png"
        ></link>
        <meta
          name="description"
          content="Your ultimate guide to all information on your favorite football clubs including stats,transfers,fixtures,results and so much more"
        />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
