import TextField from '@mui/material/TextField';

export default function BasicTextField({
  id,
  type,
  label,
  variant,
  size,
  fullWidth,
  onChange,
  error,
  helperText,
}) {
  return (
    <TextField
      id={id}
      type={type || 'text'}
      label={label}
      variant={variant}
      size={size || 'small'}
      fullWidth={fullWidth}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
}
