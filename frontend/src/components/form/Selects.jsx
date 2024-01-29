import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

export default function Selects(props) {
  const { label, name, width, control } = props;

  return (
    <div>
      <FormControl sx={{ width: { width } }} fullWidth>
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              {...field}
              label={label}
              sx={{ width: '100%', marginBottom:'15px'}}
            >
              <MenuItem value="1-10">1-10</MenuItem>
              <MenuItem value="11-50">11-50</MenuItem>
              <MenuItem value="51-100">51-100</MenuItem>
              <MenuItem value="100+">100+</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </div>
  );
}
