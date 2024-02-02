import { Stack, Box, Button, Grid, Typography } from "@mui/material";
import MultilineTextFields from "../Components/form/MultilineTextFields";
import Datepicker from "../Components/form/Datepicker";
import Selects from "../Components/form/Selects";
import TextFields from "../Components/form/TextFields";
import CheckboxComponent from "../Components/form/CheckboxComponent";
import {useForm} from 'react-hook-form'
import AxiosInstance from '../api/Axios'
import dayjs from "dayjs";

const Book = () => {
    const {handleSubmit, reset, setValue, control} = useForm()
    const submission = async (data) => {
        try {
            const StartDate = dayjs(data.Startdate["$d"]).format('YYYY-MM-DDTHH:mm:ssZ');
            const EndDate = dayjs(data.Enddate["$d"]).format('YYYY-MM-DDTHH:mm:ssZ');

            const response = await AxiosInstance.post(`/appointments/`, {
                firstname: data.Firstname,
                lastname: data.Lastname,
                companyemail: data.companyEmail,
                companyphone: data.companyPhone,
                companyname: data.CompanyName,
                companysize: data.CompanySize,
                start_date: StartDate,
                end_date: EndDate,
                audit_and_assurance: data.AuditandAssurance || false,
                taxation: data.Taxation || false,
                financial_analysis: data.FinancialAnalysis || false,
                comment: data.Multifield,
            });

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

 return(
    <Stack sx={{background:'#f3f7fd', paddingTop:'30px', paddingLeft:'200px', paddingRight:'200px'}}>
        <form onSubmit={handleSubmit(submission)}>
            <Box sx={{marginBottom:'24px', padding:8, background:'#4997f2', borderRadius:'8px', fontWeight: 'bold' }}>
                <Typography sx={{color:'#fff', fontSize:24, textAlign:'center'}}> 
                    BOOK A MEETING
                </Typography>
            </Box>
            <Stack sx={{padding:'30px', boxShadow: 2, borderRadius: '8px', background: '#ffffff' }} direction='column' >
                <Grid container spacing={3}>   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>First name</Typography>
                        <TextFields
                            name='Firstname'
                            label='John'
                            control={control}  
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px',textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Last name</Typography>
                        <TextFields
                            name='Lastname'
                            label='Weack'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Company email</Typography>
                        <TextFields
                            name='companyEmail'
                            label='John@gmail.com'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Cell phone</Typography>
                        <TextFields
                            name='companyPhone'
                            label='+1 401 334 7653'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Company name</Typography>
                        <TextFields
                            name='CompanyName'
                            label='Google'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Company Size</Typography>
                        <Selects
                            name='CompanySize'
                            label='Select'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Start Date</Typography>
                        <Datepicker
                            name='Startdate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>End Date</Typography>
                        <Datepicker
                            name='Enddate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>
                    <Grid item >
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>Interested fields</Typography>
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
                <Grid container>   
                    <Grid item xs={12} sm={12}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}>How can we help?</Typography>
                        <MultilineTextFields
                            name='Multifield'
                            label='Let us know'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Button variant="contained" type="submit" sx={{width:'100%', marginTop:2}}>Book a meeting</Button>
            </Stack>
        </form> 
    </Stack>
    )
}
export default Book;