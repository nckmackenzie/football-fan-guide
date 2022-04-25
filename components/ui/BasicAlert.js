import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function BasicAlert({ type, message, sx, children, title }) {
  return (
    <Alert severity={type} sx={{ ...sx }}>
      <AlertTitle>{title || ''}</AlertTitle>
      {message || children}
    </Alert>
  );
}
