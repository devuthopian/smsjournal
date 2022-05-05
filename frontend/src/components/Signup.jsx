import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { alpha, styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '2px solid #AAAAAA',
    fontSize: 16,
    width: '100%',
    padding: '0px 12px',
    height: '40px',
    color: '#111111',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const GetNotificationsSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .Mui-checked': {
    color: '#ffffff !important',
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#DE5126 !important',
    opacity: '1 !important',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const UpdateButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  backgroundColor: '#DE5126',
  padding: '18px 22px',
  borderRadius: 40,
  fontSize: 20,
  lineHeight: '18px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#000',
  },
}));


const StyledButton = styled('button')(
  ({ theme }) => `
  font-size: 16px;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0 none;
  border-radius: 0;
  margin: 0 0 30px 0;
  padding: 13px 15px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
    padding: 0px;
    margin: 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 0 none;
    border-radius: 0;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};



const timezones = [
  'GMT',
  'EST',
  'IST',
];
const re_time = [
  'GT',
  'PT',
  'ET',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function SignUp() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [selectedTimezone, setSelectedTimezone] = React.useState('');
  const [selectedRtime, setSelectedRtime] = React.useState('');
  const [getNotification, setNotification] = React.useState('');

  useEffect(() => {
    let current_loc = getUrlParameter('email');
    if(current_loc){
      setEmail(current_loc);
    }
    
  }, []);
      
  const theme = useTheme();

  const [values, setValues] = React.useState({
      textmask: '',
      numberformat: '1320',
  });

  const createUser = async () => {
    // const response = await axios.post(process.env.REACT_APP_BACKEND_API_URL+'/create/', { 
    //   firstname: firstName, 
    //   lastname: lastName, 
    //   email: email, 
    //   phone: phone, 
    //   password: password 
    // }
    // );
    // const Rdata = await response;
    console.log('selectedTimezone',selectedTimezone);
    console.log('selectedRtime',selectedRtime);
  }
 
  const timezoneOnChange = (event) => {
      setSelectedTimezone(event.target.value);
  };
  const rTimeOnChange = (event) => {
      setSelectedRtime(event.target.value);
  };
  const notificationOnChange = (event) => {
    console.log('asdasdasd',event.target.value);
      // setSelectedRtime(event.target.value);
  };

  return (
    <div className="personal-settings">
      <h3>Personal Settings</h3>
      <Box
          component="form"
          noValidate
        > 
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">First Name</InputLabel>
                  <BootstrapInput id="input-firstname" onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">Last Name</InputLabel>
                  <BootstrapInput id="input-lastname" onChange={(e)=>{
                    setLastName(e.target.value)
                }}/>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">Email Address</InputLabel>
                  <BootstrapInput id="input-email" value={email}  onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">Password</InputLabel>
                  <BootstrapInput id="input-password" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">Phone Number</InputLabel>
                  <BootstrapInput id="input-password" onChange={(e)=>{
                    setPhone(e.target.value)
                }}/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <h3>Delivery Setting</h3>
          </Grid>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={selectedTimezone}
              onChange={timezoneOnChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {timezones.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selectedTimezone, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={selectedRtime}
              onChange={rTimeOnChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {re_time.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, selectedRtime, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          

          <Grid item xs={12}>
            
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              sx={{ justifyContent: 'center', width: '100%' }}
              control={<GetNotificationsSwitch defaultChecked />}
              label="Get Notifications"
              onChange={notificationOnChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
             <UpdateButton onClick={createUser} variant="contained">Update Settings</UpdateButton>
          </Grid>

        </Grid>
      </Box>
    
    </div>
  );
}
