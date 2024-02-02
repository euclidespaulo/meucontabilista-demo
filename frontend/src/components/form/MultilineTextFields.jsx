import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


export default function MultilineTextFields ({label, name, control}) {
 
  return ( 
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error }, formState }) => (
      <TextField
      sx={{ width: '100%' }}
      id="outlined-multiline-static"
      label={label}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      multiline
      rows={4}
    />
      )}
    />
  
  );
}



