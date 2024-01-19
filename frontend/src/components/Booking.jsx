import { Box, TextField, Typography } from "@mui/material";
import MultilineTextFields from "./form/MultilineTextFields";
import Datepicker from "./form/Datepicker";
import Selects from "./form/Selects";
import TextFields from "./form/TextFields";
import {useForm} from 'react-hook-form'

const Booking = () => {
    const {handleSubmit, reset, setValue, control} = useForm()


    return(
        <div>
            <Box sx={{display:'flex', width:'100%', background:'#00003f', marginBottom:'10px'}}>
                <Typography sx={{marginLeft:'10px', color:'#fff'}}> 
                    Booking
                </Typography>
            </Box>

            <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>
                <Box sx={{display:'flex', justifyContent:'space-around'}}>
                    <TextField
                        placeholder="First Name"
                        width='30%'
                        control={control}
                    />
                    <TextField
                        placeholder="Last Name"
                        width='30%'
                        control={control}
                    />
                </Box>
                
                <Box>        

                </Box>
            </Box>
        </div>
    )
}

export default Booking;