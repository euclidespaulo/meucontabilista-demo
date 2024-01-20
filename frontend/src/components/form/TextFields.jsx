import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function TextFields (props) {
  const {label, name, control} = props
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
      id="outlined-basic" 
      sx={{width:'140%', marginTop:1}}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      />

      )}
    />
  
  );
}