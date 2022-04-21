import { app } from '../firebase.config';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
app;

function MyApp({ Component, pageProps }) {
  const auth = getAuth();

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
