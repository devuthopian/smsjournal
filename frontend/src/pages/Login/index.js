import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoginBg from '../../images/login-bg.jpg';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const { register, formState: { errors } } = useForm();
  const [loginStatus, setLoginStatus] = useState("");
  const [user, setUser] = useState()
  
  const heading = {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: '45px',
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
      marginTop: 52,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000',
      }
  };
  const loginMsgStyle = {
      background: '#EEEEEE',
      border: '2px solid #AAAAAA',
      boxSizing: 'border-box',
      borderRadius: '4px',
      textAlign: 'left',
      padding: '12px 20px',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '20px',
      color: '#111111',
      marginBottom: '1.2rem',
  };

  const loginUser = async () => {
    axios.post(process.env.REACT_APP_BACKEND_API_URL+"/login/", {
      username: username,
      password: password,
    }).then((response) => {
      console.log('response',response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        // setLoginStatus(response.data[0].first_name);
        setUser(response.data[0]);
        sessionStorage.setItem('user', JSON.stringify(response.data[0]));
        navigate('/dashboard');
      }
    });
  }
  if(user && user.first_name){
    navigate('/dashboard');
  }
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser && typeof(loggedInUser) === 'undefined') {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', height: 'calc(100vh - 185px)', alignItems: 'center', marginTop: '0' }} style={{ backgroundImage: `url(${LoginBg})`, backgroundSize: 'cover' }}>
        <Grid item xs={4}>
          <Box style={formStyle} sx={{ backgroundColor: 'white', width: 525, margin: '0 auto', boxSizing: 'border-box' }}>
            {loginStatus !== '' ? <Box style={loginMsgStyle}>{loginStatus}</Box> : '' }
            <Typography style={heading} variant="h3" gutterBottom component="div">Log In</Typography>
              <input style={formInput} type="text" placeholder="Email Address" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} onChange={(e)=>{ setUsername(e.target.value) }}/>
              <input style={formInput} type="password" placeholder="Password" {...register("Password", {})} onChange={(e)=>{ setPassword(e.target.value) }}/>
              <input style={button} onClick={loginUser} type="submit" value="Log In" />
              {/*<Link href="/forgot" style={linkStyle}>
                Forgot password?
                </Link>*/}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;