import { useEffect, useState } from "react";
import { Stack, Box, Button, Grid, Typography, Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import MultilineTextFields from "../Components/form/MultilineTextFields";
import Datepicker from "../Components/form/Datepicker";
import Selects from "../Components/form/Selects";
import TextFields from "../Components/form/TextFields";
import CheckboxComponent from "../Components/form/CheckboxComponent";
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools'
import AxiosInstance from '../api/Axios';
import dayjs from "dayjs";
import { useTranslation } from 'react-i18next';
import FormEN from '../data/locales/en/Form.json';
import FormPT from '../data/locales/pt/Form.json';




const Book = () => {

    const {
        register,
        control, 
        handleSubmit, 
        reset,
        formState: {errors, isSubmitting , isSubmitSuccessful}, 
    } = useForm();


    const onSubmit = async (data) => {
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

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();
        setOpenSnackbar(true);
      }
    }, [isSubmitSuccessful]);


    const {t, i18n} = useTranslation();

    const FormText = i18n.language === 'pt' ? FormPT : FormEN;

 return(
    <Stack sx={{background:'#f3f7fd', paddingTop:'30px', paddingLeft:'200px', paddingRight:'200px'}}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                            {...register('Firstname', {
                                required:{
                                    value: true,
                                    message:`* * * ${t(FormText.fn)} required`
                                }
                            })}
                            label='John'
                            control={control}  
                        />
                        <Typography sx={{color:'red', fontSize:'12px'}}>{errors.Firstname?.message}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px',textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ln)}</Typography>
                        <TextFields
                            {...register('Lastname', {
                                required:{
                                    value: true,
                                    message:`* * * ${t(FormText.ln)} required`
                                }
                            })}
                            label='Weack'
                            control={control}
                        />
                        <Typography sx={{color:'red', fontSize:'12px'}}>{errors.Lastname?.message}</Typography>
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ce)}</Typography>
                        <TextFields
                            {...register('companyEmail', {
                                required:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message:`* * * ${t(FormText.ce)} format`
                                }
                            })}
                            label='John@gmail.com'
                            control={control}
                        />
                        <Typography sx={{color:'red', fontSize:'12px'}}>{errors.companyEmail?.message}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Typography sx={{margin:'6px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cp)}</Typography>
                        <TextFields
                            {...register('companyPhone',  {
                                required:{
                                    value: true,
                                    message:`* * * ${t(FormText.cp)} required`
                                }
                            })}
                            label='+1 401 334 7653'
                            control={control}
                        />
                        <Typography sx={{color:'red', fontSize:'12px'}}>{errors.companyPhone?.message}</Typography>
                    </Grid>
                </Grid> 
                <Grid container spacing={3} >   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cn)}</Typography>
                        <TextFields
                            {...register('CompanyName')}
                            label='Google'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.cz)}</Typography>
                        <Selects
                            {...register('CompanySize')}
                            label='Select'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>   
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.sd)}</Typography>
                        <Datepicker
                            {...register('Startdate')}
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.ed)}</Typography>
                        <Datepicker
                            {...register('Enddate')}
                            label='Day and time'
                            control={control}
                        />
                    </Grid>
                </Grid> 
                <Grid container spacing={3}>
                    <Grid item >
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.a)}</Typography>
                        <CheckboxComponent
                            {...register('AuditandAssurance')}
                            label={t(FormText.b)}
                            control={control}
                        />
                        <CheckboxComponent
                            {...register('Taxation')}
                            label={t(FormText.b)}
                            control={control}
                        />
                        <CheckboxComponent
                            {...register('FinancialAnalysis')}
                            label={t(FormText.c)}
                            control={control}
                        />
                    </Grid>
                </Grid>
                <Grid container>   
                    <Grid item xs={12} sm={12}>
                        <Typography sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Untitled sans, sans-serif'}}> {t(FormText.a)}</Typography>
                        <MultilineTextFields
                            {...register('Multifield')}
                            label='Let us know'
                            control={control}
                            defaultValue=""
                        />
                    </Grid>
                </Grid> 
                <Button variant="contained" type="submit" disabled={isSubmitting} sx={{width:'100%', marginTop:2}}> {t(FormText.t)}</Button>
            </Stack>
        </form> 
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
                    Successfully Submitted
            </MuiAlert>
        </Snackbar>
        <DevTool control={control} />
    </Stack>
    )
}
export default Book;