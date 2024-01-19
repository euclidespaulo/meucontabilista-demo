import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Controller } from 'react-hook-form';

export default function Datepicker(props) {
    const {label, name, control, width} = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Controller
      name = {name}
      control = {control}
      render = {({
        field: onChange, value,
      }) => (
        <DateTimePicker label={label}  sx={{width:{width}}} />
      )}
      />
    </LocalizationProvider>
  );
}