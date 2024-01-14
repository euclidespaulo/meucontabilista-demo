import { Box, TextField, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { expertise } from './form/data';


const Contact = () => {
    
  return (
   <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-required"
          label="First Name"
        />
        <TextField
          id="outlined-required"
          label="Last Name"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          type="Email"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-company"
          label="Company"
          type="company"
          autoComplete="current-company"
        />
        <TextField
          id="outlined-phone"
          label="Phone"
          type="phone"
          autoComplete="current-phone"
        />
        <TextField
          id="outlined-rol"
          label="Rol"
          type="rol"
        />
        <TextField
          id="outlined-phone"
          label="Phone"
          type="phone"
        />
        <TextField
          id="outlined-select-Consultantion"
          select
          label="Select"
    
          helperText="Please select Field"
        >
          {expertise.map((option) => (
            <MenuItem key={option.id} >
              {option.field}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker label="Start Date" />
                <DateTimePicker label="End Date" />
            </DemoContainer>
        </LocalizationProvider>
        </Box>
      </div>
    
    
  );
}

export default Contact;