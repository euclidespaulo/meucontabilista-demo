import { Box, Button, Grid, Typography } from "@mui/material";
import MultilineTextFields from "./form/MultilineTextFields";
import Datepicker from "./form/Datepicker";
import Selects from "./form/Selects";
import TextFields from "./form/TextFields";
import CheckboxComponent from "./form/CheckboxComponent";
import {useForm} from 'react-hook-form'

const Book = () => {
    const {handleSubmit, reset, setValue, control} = useForm()
    const submission = (data) => console.log(data)


 return(
    <div style={{paddingRight:'250px', paddingLeft:'250px'}}>
        <form onSubmit={handleSubmit(submission)}>
            <Box sx={{margin:'12px', padding:8, background:'#c3d9f3', borderRadius:'8px', fontWeight: 'bold' }}>
                <Typography sx={{color:'#fff', fontSize:24, textAlign:'center'}}> 
                    BOOK A MEETING
                </Typography>
            </Box>
        <Box sx={{margin: '12px', boxShadow: 2, padding: 5, borderRadius: '8px', background: '#ffffff' }}>
                <Grid  sx={{display:'flex', flexDirection:'row'}}>   
                    <Grid sx={{marginRight:13}}>
                        <Typography sx={{fontWeight: 'bold'}}>First name</Typography>
                        <TextFields
                            name='First name'
                            label='John'
                            control={control}  
                        />
                    </Grid>
                    <Grid >
                        <Typography sx={{fontWeight: 'bold'}}>Last name</Typography>
                        <TextFields
                            name='Last name'
                            label='Weack'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                    <Grid sx={{marginRight:13}}>
                        <Typography sx={{fontWeight: 'bold'}}>Company email</Typography>
                        <TextFields
                            name='email'
                            label='John@gmail.com'
                            control={control}
                        />
                    </Grid>
                    <Grid >
                        <Typography sx={{fontWeight: 'bold'}}>Cell phone</Typography>
                        <TextFields
                            name='phone'
                            label='+1 401 334 7653'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                    <Grid sx={{marginRight:13}}>
                        <Typography sx={{fontWeight: 'bold'}}>Company name</Typography>
                        <TextFields
                            name='Companyname'
                            label='John@gmail.com'
                            control={control}
                        />
                    </Grid>
                    <Grid >
                        <Typography sx={{fontWeight: 'bold'}}>Company Size</Typography>
                        <Selects
                            name='CompanySize'
                            label='1-10'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid  sx={{display:'flex', flexDirection:'row', marginTop:2}}>   
                    <Grid sx={{marginRight:8.4}}>
                        <Typography sx={{fontWeight: 'bold'}}>Start Date</Typography>
                        <Datepicker
                            name='startdate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                    <Grid >
                        <Typography sx={{fontWeight: 'bold'}}>End Date</Typography>
                        <Datepicker
                            name='enddate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid sx={{display:'flex', flexDirection:'row', marginTop:1}}>
                    <Grid>
                        <Typography sx={{fontWeight: 'bold'}}>Interested fields</Typography>
                        <CheckboxComponent
                            name='AuditandAssurance'
                            label='Audit and Assurance'
                            control={control}
                        />
                        <CheckboxComponent
                            name='Taxation'
                            label='Taxation'
                            control={control}
                        />
                        <CheckboxComponent
                            name='FinancialAnalysis'
                            label='Financial Analysis'
                            control={control}
                        />
                    </Grid>
                </Grid>
                <Grid  sx={{display:'flex', flexDirection:'row', marginTop:1}}>   
                    <Grid>
                        <Typography sx={{fontWeight: 'bold'}}>How can we help?</Typography>
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
        </form> 
    </div>
    )
}
export default Booking;