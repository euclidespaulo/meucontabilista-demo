import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function TextFields({ label, name, control }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error }, formState }) => (
        <TextField
          id="outlined-basic"
          label={label}
          value={field.value}  
          onChange={(e) => field.onChange(e.target.value)}  
          variant="outlined"
          sx={{ width: '100%', marginBottom:'15px'}}
        />
      )}
    />
  );
}
