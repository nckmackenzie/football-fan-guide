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
  value,
  onBlur,
}) {
  return (
    <TextField
      id={id}
      type={type || 'text'}
      label={label}
      variant={variant || 'outlined'}
      size={size || 'small'}
      fullWidth={fullWidth}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      sx={{ marginBottom: '0.875rem' }}
    />
  );
}
