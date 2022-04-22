import { Button } from '@mui/material';

export default function BasicButton({ children, variant, sx, startIcon }) {
  return (
    <Button
      variant={variant || 'contained'}
      startIcon={startIcon}
      sx={{ ...sx }}
    >
      {children}
    </Button>
  );
}
