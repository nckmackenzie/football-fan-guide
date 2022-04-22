import React from 'react';
import { useRouter } from 'next/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
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
  const { setUser } = React.useContext(AuthContext);

  const onSubmitHandler = async data => {
    const auth = getAuth();
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
          <AuthForm type={type} authHandler={onSubmitHandler} />
        </AuthActionProvider>
      </CardContent>
    </Card>
  );
}
