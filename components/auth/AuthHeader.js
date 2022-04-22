import { Typography } from '@mui/material';
import React from 'react';

export default function AuthHeader({ type }) {
  return (
    <Typography variant="h5" align="center" component="h2" gutterBottom>
      {`${
        type === 'login' ? 'Login to your account' : 'Register account with us'
      }`}
    </Typography>
  );
}
