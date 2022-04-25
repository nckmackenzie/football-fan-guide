import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';

export default function BasicSelect({
  hasError,
  id,
  label,
  handleChange,
  value,
  sx,
  fields = [],
  errorText,
}) {
  return (
    <FormControl fullWidth size="small" error={hasError} sx={{ ...sx }}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value || ''}
        label={label}
        onChange={handleChange}
      >
        {fields.map(field => (
          <MenuItem key={field.value} value={field.value}>
            {field.text}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
}
