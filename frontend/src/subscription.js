import React from 'react';
import { Box } from '@mui/system';
import SignUp from './components/Signup';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import background from './images/PIC.png';
import BackIcon from './images/back-icon.svg';
import { useNavigate } from 'react-router-dom';

const BackButton = styled(Button)(({ theme }) => ({
  color: '#132D2F',
  backgroundColor: '#ffffff',
  boxShadow: '0px 8px 24px rgba(74, 77, 69, 0.1)',
  padding: '11px 15px 11px 39px',
  borderRadius: '12px',
  fontWeight: 700,
  fontSize: 15,
  lineHeight: '18px',
  textTransform: 'none',
  '&:before': {
    content: '""',
    backgroundImage: `url(${BackIcon})`,
    width: 20,
    height: 20,
    marginRight: 9,
    position: 'absolute',
    top: 9,
    left: 10,
  },
  '&:hover': {
    backgroundColor: '#ffffff',
  },
}));


function Refsignup() {
  const navigate = useNavigate();
  
  const backToHome = (event) => {
    navigate('/');
  }

  return (
    <div className="Refsignup-main">
      <Box sx={{ maxWidth: '450px',margin: '0 auto', backgroundColor: '#FFFAEF' }}>
        <div className="top-header" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
          <Box sx={{ p: 3, paddingTop: '50px' }}>
            <BackButton variant="contained" onClick={backToHome}>Back</BackButton>
            <h2>Your Profile</h2>
            <p>Tailor your journaling experience to suit you. Update your settings in one easy space!</p>
          </Box>

        </div>
        <Box sx={{ p: 4 }}>
          <SignUp/>
        </Box>
      </Box>
    </div>
  );
}

export default Refsignup;
