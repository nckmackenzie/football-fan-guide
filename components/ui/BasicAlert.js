import React from 'react';
import Alert from '@mui/material/Alert';

export default function BasicAlert({ type, message, sx }) {
  return (
    <Alert severity={type} sx={{ ...sx }}>
      {message}
    </Alert>
  );
}
