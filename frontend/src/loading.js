import * as React from 'react';
// import Image from 'next/image';
import loadingbg from './images/loading-bg.jpg';
import Typography from '@mui/material/Typography';


function LoadingScreen() {

  const heading = {
      fontFamily: "'Ubuntu', sans-serif",
      fontSize: 60,
      color: '#ffffff',
      marginBottom: 0,
  };

  const loaderbg = {
      height: '100vh', 
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundImage: `url(${loadingbg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      transition: 'all 0.3s ease-in-out',
  };


    return(
      <div className="loader" style={loaderbg}>
        <Typography style={heading} variant="h3" gutterBottom component="div">Take a deep breath...</Typography>
      </div>
    )
}

export default LoadingScreen
