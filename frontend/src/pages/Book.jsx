import { Stack, Box, Button, Grid, Typography } from "@mui/material";
import MultilineTextFields from "../Components/form/MultilineTextFields";
import Datepicker from "../Components/form/Datepicker";
import Selects from "../Components/form/Selects";
import TextFields from "../Components/form/TextFields";
import CheckboxComponent from "../Components/form/CheckboxComponent";
import {useForm} from 'react-hook-form';
import AxiosInstance from '../api/Axios';
import dayjs from "dayjs";
import { useTranslation } from 'react-i18next';
import FormEN from '../data/locales/en/Form.json';
import FormPT from '../data/locales/pt/Form.json';



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

    const {t, i18n} = useTranslation();

    const FormText = i18n.language === 'pt' ? FormPT : FormEN;

 return(
    <Stack sx={{background:'#f3f7fd', paddingTop:'30px', paddingLeft:'200px', paddingRight:'200px'}}>
        <form onSubmit={handleSubmit(submission)}>
            <Box sx={{marginBottom:'24px', padding:8, background:'#4997f2', borderRadius:'8px', fontWeight: 'bold' }}>
                    <Typography sx={{color:'#fff', fontSize:24, textAlign:'center'}}> 
                        {t(FormText.t)}
                     </Typography>
            </Box>
            <Stack sx={{padding:'30px', boxShadow: 2, borderRadius: '8px', background: '#ffffff' }} direction='column' >
                <Grid container spacing={3}>   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.fn)}</Typography>
                        <TextFields
                            name='Firstname'
                            label='John'
                            control={control}  
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px',textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ln)}</Typography>
                        <TextFields
                            name='Lastname'
                            label='Weack'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ce)}</Typography>
                        <TextFields
                            name='companyEmail'
                            label='John@gmail.com'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cp)}</Typography>
                        <TextFields
                            name='companyPhone'
                            label='+1 401 334 7653'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cn)}</Typography>
                        <TextFields
                            name='CompanyName'
                            label='Google'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cz)}</Typography>
                        <Selects
                            name='CompanySize'
                            label='Select'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.sd)}</Typography>
                        <Datepicker
                            name='Startdate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ed)}</Typography>
                        <Datepicker
                            name='Enddate'
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>
                    <Grid item >
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.a)}</Typography>
                        <CheckboxComponent
                            name='AuditandAssurance'
                            label={t(FormText.b)}
                            control={control}
                        />
                        <CheckboxComponent
                            name='Taxation'
                            label={t(FormText.b)}
                            control={control}
                        />
                        <CheckboxComponent
                            name='FinancialAnalysis'
                            label={t(FormText.c)}
                            control={control}
                        />
                    </Grid>
                </Grid>
                <Grid container>   
                    <Grid item xs={12} sm={12}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(convert.a)}</Typography>
                        <MultilineTextFields
                            name='Multifield'
                            label='Let us know'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Button variant="contained" type="submit" sx={{width:'100%', marginTop:2}}> {t(FormText.t)}</Button>
            </Stack>
        </form> 
    </Stack>
    )
}
export default Book;