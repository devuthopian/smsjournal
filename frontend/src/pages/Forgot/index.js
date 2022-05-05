import * as React from 'react'
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoginBg from '../../images/login-bg.jpg';
import Typography from '@mui/material/Typography';

function ForgotForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  const heading = {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: '45px',
      color: '#000000',
      marginBottom: '2.5rem'
  };

  const heading2 = {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: '20px',
      fontWeight: '700',
      color: '#000000',
      marginBottom: '2.5rem'
  };

  const formStyle = {
      borderRadius: '20px',
      padding: '5rem 3rem',
      textAlign: 'center',
  };

  const formInput = {
      border: '2px solid #AAAAAA',
      boxSizing: 'border-box',
      borderRadius: '4px',
      width: '100%',
      height: '51px',
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: 16,
      padding: '10px',
      marginBottom: '25px',
  };

  const button = {
      color: '#ffffff',
      backgroundColor: '#82A42B',
      padding: '15px 22px',
      borderRadius: 30,
      fontSize: 15,
      lineHeight: '18px',
      width: '100%',
      border: 'none',
      fontWeight: '700',
      textTransform: 'uppercase',
      marginTop: 10,
      '&:hover': {
        backgroundColor: '#000',
      }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', height: 'calc(100vh - 185px)', alignItems: 'center', marginTop: '0' }} style={{ backgroundImage: `url(${LoginBg})`, backgroundSize: 'cover' }}>
        <Grid item xs={4}>
          <Box style={formStyle} sx={{ backgroundColor: 'white', width: 525, margin: '0 auto' }}>
            <Typography style={heading} variant="h3" gutterBottom component="div">Log In</Typography>

            <Typography style={heading2} variant="h5" gutterBottom component="div">Add an Email Address</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input style={formInput} type="email" placeholder="Email Address" {...register("Email Address", {})} />

              <input style={button} type="submit" value="Save" />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ForgotForm;