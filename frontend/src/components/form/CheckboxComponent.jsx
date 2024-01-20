import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Controller } from 'react-hook-form';

export default function CheckboxComponent(props) {
  const { label, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} />}
          label={label}
        />
      )}
    />
  );
}
