import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../images/logo.svg';
import { useNavigate } from 'react-router-dom';


function Header(){
  	const navigate = useNavigate();
  	const [user, setUser] = useState();

  	if(!user){
	    navigate('/login');
  	}
  	useEffect(() => {
	    const loggedInUser = sessionStorage.getItem("user");
	    if (loggedInUser && typeof(loggedInUser) === 'undefined') {
	      const foundUser = JSON.parse(loggedInUser);
	      setUser(foundUser);
	    }
  	}, []);
  	console.log('user',user);
	return(
		<Box id="header" className="headerMain" sx={{ flexGrow: 1 }}>
	      <Grid container spacing={2} sx={{ alignItems: 'center', padding: '3rem 5rem', borderBottom: '3px solid #000000' }}>
	        <Grid item xs={4}>
	        	
	        </Grid>
	        <Grid item xs={4} sx={{ textAlign: 'center' }}>
	        	<img src={Logo} alt="Logo" />
	        </Grid>
	        <Grid item xs={4}>
	        	
	        </Grid>
	      </Grid>
	    </Box>
	);
}

export default Header;