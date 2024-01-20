import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


export default function MultilineTextFields (props) {
  const {label, width, name, control} = props
  return (
      
    <Controller
      name = {name}
      control = {control}
      render = {({
        field: onChange, value,
        fieldState: {error},
        formState,
      }) => (

      
      <TextField
      sx={{width:{width}, marginTop:1}}
      id="outlined-multiline-static"
      label={label}
      value={value}
      onChange={onChange}
      multiline
      rows={4}
    />
      

      

      )}

      

    />
  
  );
}


