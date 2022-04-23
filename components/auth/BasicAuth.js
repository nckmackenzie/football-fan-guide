import React from 'react';
import { useRouter } from 'next/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthActionProvider from '../../context/Auth/AuthActionProvider';
import AuthContext from '../../context/Auth/auth-context';

export default function BasicAuth({ type }) {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const { setUser } = React.useContext(AuthContext);
  const auth = getAuth();

  const onSubmitHandler = async data => {
    try {
      if (data.type === 'register') {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        setUser(userCredentials);
        updateProfile(auth.currentUser, { displayName: data.name });
      }
      router.push('/');
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const oauthHandler = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
      router.push('/');
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(GoogleAuthProvider.credentialFromError(error));
    }
  };

  return (
    <Card sx={{ minWidth: '22.5rem', maxWidth: '30rem' }}>
      <CardMedia
        component="img"
        height="194"
        image="/img/banner/banner.jpg"
        alt="Football fans in a stadium"
      />
      <CardContent>
        <AuthActionProvider>
          <AuthHeader type={type} />
          <AuthForm
            type={type}
            authHandler={onSubmitHandler}
            oauthHandler={oauthHandler}
          />
        </AuthActionProvider>
      </CardContent>
    </Card>
  );
}
