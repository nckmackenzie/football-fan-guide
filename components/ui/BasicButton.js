import { Button } from '@mui/material';

export default function BasicButton({
  children,
  variant,
  sx,
  startIcon,
  type,
  disabled,
}) {
  return (
    <Button
      variant={variant || 'contained'}
      startIcon={startIcon}
      type={type || 'button'}
      disabled={disabled || false}
      sx={{ ...sx }}
    >
      {children}
    </Button>
  );
}
