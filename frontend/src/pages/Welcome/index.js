import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import bg1 from '../../images/bg1.png';
import bg2 from '../../images/bg2.png';
import bg3 from '../../images/bg3.png';
import WelcomeRose from '../../images/welcome-rose.png';

function Welcome({user}){
	// const TEXTDOM = process.env.REACT_APP_TEXTDOMAIN;
	const heading = {
	    fontFamily: "'Ubuntu', sans-serif",
	};

	const button = {
		  color: '#ffffff',
	      backgroundColor: '#82A42B',
	      padding: '15px 22px',
	      borderRadius: 30,
	      fontSize: 15,
	      lineHeight: '18px',
	      width: '100%',
	      maxWidth: 350,
	      border: 'none',
	      fontWeight: '700',
	      textTransform: 'uppercase',
	      '&:hover': {
	        backgroundColor: '#000',
	      }
	};

	return(
		<Box sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
			<Container maxWidth="sm">
				<Box className="top-section" sx={{ textAlign: 'center', marginBottom: '4rem' }}>
			      <Typography variant="h2">Welcome, {user ? user.first_name : ''}!</Typography>
			      <Grid item xs={12} sx={{ marginTop: '2rem', marginBottom: '3rem' }}>
			      	<img src={WelcomeRose} alt="Welcome Rose"/>
			      </Grid>

			      <Grid container spacing={2}>
			       	<Grid item xs={3}></Grid>
			        <Grid item xs={3}>
			        	<Typography variant="h5" style={heading}>Streak</Typography>
			        	<Typography variant="h4" style={heading}><FavoriteBorderIcon style={{ position:'relative', top: '3px', marginRight: '5px' }} />3</Typography>
			        </Grid>
			        <Grid item xs={3}>
			        	<Typography variant="h5" style={heading}>Entries</Typography>
			        	<Typography variant="h4" style={heading}><FavoriteBorderIcon style={{ position:'relative', top: '3px', marginRight: '5px' }} />3</Typography>
			        </Grid>
			        <Grid item xs={3}></Grid>
			      </Grid>

			      	<Box component="span" sx={{ p: 2, border: '2px solid #AAAAAA', borderRadius: '8px', display: 'inline-block', textAlign: 'left', fontSize: '16px', lineHeight: '20px', color: '#111111', marginTop: '3rem' }}>
				      Your personal journal helps you keep track of your thoughts, plan your goals and reflect on your week.
				    </Box>

			    </Box>
		    </Container>

		    <Container maxWidth="xl">
		    	<Grid className="bottom-section" container spacing={8}>
			       	<Grid item xs={4}>
			        	<Typography variant="h3" className="box-head" style={heading}>Today’s Affirmation</Typography>
			        	<Box className="contentbox" sx={{ textAlign: 'center' }} style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}>
			        		<Typography variant="h3">"Make way for the unprecedented and watch your reality rearrange yourself,"</Typography>
			        	</Box>
			        </Grid>
			        <Grid item xs={4}>
			        	<Typography variant="h3" className="box-head" style={heading}>Your Most Recent Entry</Typography>
			        	<Box className="contentbox recent-box" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover' }}>
			        		<Typography variant="h4" style={heading}>Monday Musings</Typography>
			        		<Typography variant="subtitle1" style={heading}>March 13th, 2022</Typography>
			        		<Typography variant="h5" style={heading}>What have you been doing to unwind?</Typography>
			        		<Typography variant="body1" style={heading}>
			        			Recently I’ve taken up yoga to try and relax more in the evenings after work. It’s been a great way for me to reflect on the day and unwind :)
			        		</Typography>
			        	</Box>
			        </Grid>
			        <Grid item xs={4}>
			        	<Typography variant="h3" className="box-head" style={heading}>Your Next Prompt</Typography>
			        	<Box className="contentbox" sx={{ textAlign: 'center' }} style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover' }}>
			        		<Typography variant="h2">Tomorrow at 12:00pm</Typography>
			        	</Box>
			        </Grid>

			        <Grid item xs={12} sx={{ textAlign: 'center' }}>
			        	<Button variant="contained" style={button}>View Full Journal</Button>
			        </Grid>

			    </Grid>
			</Container>
		</Box>
	);
}

export default Welcome;