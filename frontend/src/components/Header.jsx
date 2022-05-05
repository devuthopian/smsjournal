import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Discovery from '../images/discovery-icon.svg';
import Logo from '../images/logo.svg';
import PersonIcon from '@mui/icons-material/Person';

function Header({user}){
	return(
		<Box id="header" className="headerMain" sx={{ flexGrow: 1 }}>
	      <Grid container spacing={2} sx={{ alignItems: 'center', padding: '3rem 5rem', borderBottom: '3px solid #000000' }}>
	        <Grid item xs={4}>
	        	<img className="discovery-icon" src={Discovery} alt="Discovery Icon" />
	        </Grid>
	        <Grid item xs={4} sx={{ textAlign: 'center' }}>
	        	<img src={Logo} alt="Logo" />
	        </Grid>
	        <Grid item xs={4}>
	        	<Stack className="user-head-right" direction="row" spacing={2} sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
		        	<PersonIcon/>	
		        	<h3>{user ?user.first_name : ''}</h3>
	        	</Stack>
	        </Grid>
	      </Grid>
	    </Box>
	);
}

export default Header;