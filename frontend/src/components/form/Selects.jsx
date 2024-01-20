import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

export default function Selects(props) {
  const {label, name,width, control} = props
  const [size, setSize] = React.useState('');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <FormControl   sx={{width:{width}}} fullWidth>
        <InputLabel >{label}</InputLabel>

            <Controller
                    name = {name}
                    control = {control}
                    render = {({
                        field: onChange, value,
                        fieldState: {error},
                        formState,
            }) => (

                <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={value}
                        onChange={handleChange}
                        label={label}
                        sx={{width:'291%', marginTop:1}}
                    >
                        <MenuItem value={10}>1-10</MenuItem>
                        <MenuItem value={20}>11-50</MenuItem>
                        <MenuItem value={30}>51-100</MenuItem>
                        <MenuItem value={40}>100+</MenuItem>
              </Select>
            )}
            />
                
       
      </FormControl>
    </div>
  );
}