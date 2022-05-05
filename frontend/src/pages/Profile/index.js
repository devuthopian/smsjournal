import * as React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import Button from '@mui/material/Button';

import ProfileBg from '../../images/profile-bg.jpg';
const ariaLabel = { 'aria-label': 'description' };

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
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#ffffff',
    border: '2px solid #AAAAAA',
    fontSize: 16,
    width: '100%',
    padding: '0px 12px',
    height: '51px',
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

const BootstrapTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#ffffff',
    border: '2px solid #AAAAAA',
    fontSize: 16,
    width: '100%',
    padding: '0px 12px',
    height: '51px',
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

const names = [
  'GMT',
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


const SaveButton = styled(Button)(({ theme }) => ({
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
  '&:hover': {
    backgroundColor: '#000',
  }
}));

function ProfileForm() {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const [values, setValues] = React.useState({
      textmask: '',
      numberformat: '1320',
  });

  const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });

      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );

  };
  
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

  const paragraph = {
      fontSize: 18,
      lineHeight: '18px',
      textAlign: 'center',
      letterSpacing: '0.012em',
      color: 'rgba(0, 0, 0, 0.9)',
      marginBottom: '2rem',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', height: 'calc(100vh - 185px)', minHeight: '850px', alignItems: 'center', marginTop: '0', paddingTop: '2.5rem', paddingBottom: '2.5rem' }} style={{ backgroundImage: `url(${ProfileBg})`, backgroundSize: 'cover' }}>
        <Grid item xs={4}>
          <Box style={formStyle} sx={{ backgroundColor: 'white', width: 525, margin: '0 auto', boxSizing: 'border-box' }}>
            <Typography style={heading} variant="h3" gutterBottom component="div">Profile</Typography>
            <Typography variant="body1" style={paragraph}>Tailor your journaling experience to suit your lifestyle. You can update all of your settings in one easy place.</Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ width: '100%', m: 0, mb: 3 }}>
                <BootstrapInput sx={{ width: '100%' }} placeholder="Name" inputProps={ariaLabel} />
              </FormControl>

              <FormControl sx={{ width: '100%', m: 0, mb: 3 }}>
                <BootstrapTextField
                  id="outlined-password-input"
                  placeholder="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </FormControl>

              <FormControl variant="standard" sx={{ width: '100%', m: 0, mb: 3 }}>
                  <BootstrapInput 
                      value={values.textmask}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      name="textmask"
                      id="bootstrap-input"
                      inputComponent={TextMaskCustom}
                    />
              </FormControl>

              <Select
                  displayEmpty
                  className="dropdownStyle time profile-form"
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>

                <SaveButton variant="contained">Save</SaveButton>

            </Box>
            
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileForm;