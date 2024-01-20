import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Controller } from 'react-hook-form';

export default function Datepicker(props) {
  const { label, name, control } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DateTimePicker
            label={label}
            value={field.value || null}  
            onChange={(date) => field.onChange(date)}  
            sx={{ width: '120%', marginTop: 1 }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
