import { Snackbar } from '@mui/material';
import React from 'react';

export default function BasicSnackBar({ open, handleClose, message }) {
  const [state] = React.useState({
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;
  //   const handleClick = () => {
  //     setOpen(true);
  //   };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpen(false);
  // };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      key={vertical + horizontal}
      anchorOrigin={{ vertical, horizontal }}
      message={message}
    />
  );
}
