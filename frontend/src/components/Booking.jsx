import { Box, Button, Grid, Typography } from "@mui/material";
import MultilineTextFields from "./form/MultilineTextFields";
import Datepicker from "./form/Datepicker";
import Selects from "./form/Selects";
import TextFields from "./form/TextFields";
import {useForm} from 'react-hook-form'

const Booking = () => {
    const {handleSubmit, reset, setValue, control} = useForm()


    return(
        <div style={{paddingRight:'250px', paddingLeft:'250px'}}>
            <form onSubmit={handleSubmit}></form>
            <Box sx={{margin:'12px', padding:8, background:'#c3d9f3', borderRadius:'8px' }}>
                <Typography sx={{color:'#fff', fontSize:24, textAlign:'center'}}> 
                    BOOK A MEETING
                </Typography>
            </Box>

       <Box sx={{margin: '12px', boxShadow: 2, padding: 5, borderRadius: '8px', background: '#ffffff' }}>
            <Grid  sx={{display:'flex', flexDirection:'row'}}>   
                <Grid sx={{marginRight:13}}>
                    <Typography>First name</Typography>
                     <TextFields
                        name='First name'
                        label='John'
                        control={control}
                        
                        
                    />
                </Grid>
                <Grid >
                    <Typography>Last name</Typography>
                     <TextFields
                        name='Last name'
                        label='Weack'
                        control={control}
                     
                    />
                </Grid>
            </Grid> 
            <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                <Grid sx={{marginRight:13}}>
                    <Typography>Company email</Typography>
                     <TextFields
                        name='email'
                        label='John@gmail.com'
                        control={control}
                    />
                </Grid>
                <Grid >
                    <Typography>Cell phone</Typography>
                     <TextFields
                        name='Last name'
                        label='+1 401 334 7653'
                        control={control}
                    />
                </Grid>
            </Grid> 
            <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                <Grid sx={{marginRight:13}}>
                    <Typography>Company name</Typography>
                     <TextFields
                        name='email'
                        label='John@gmail.com'
                        control={control}
                    />
                </Grid>
                <Grid >
                    <Typography>Company Size</Typography>
                     <Selects
                        name='Company Size'
                        label='1-10'
                        control={control}

                    />
                </Grid>
            </Grid> 
            <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                <Grid sx={{marginRight:8.4}}>
                    <Typography>Start Date</Typography>
                     <Datepicker
                        name='date'
                        label='Day and time'
                        control={control}
                    />
                </Grid>
                <Grid >
                    <Typography>End Date</Typography>
                     <Datepicker
                        name='date'
                        label='Day and time'
                        control={control}

                    />
                </Grid>
            </Grid> 
            <Grid  sx={{display:'flex', flexDirection:'row', marginTop:1}}>   
                <Grid>
                    <Typography>How can we help?</Typography>
                     <MultilineTextFields
                        name='multifield'
                        label='Let us know'
                        control={control}
                        width='286%'    
                    />
                </Grid>
            </Grid> 
            <Button variant="contained" type="submit" sx={{width:'100%', marginTop:2}}>Book a meeting</Button>
       </Box>
        </div>
    )
}

export default Booking;