import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: '0.5rem',
      color: '#ffffff',
    },
    subtitle1: {
      fontSize: '1rem',
      color: '#bb86fc',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#ffffff',
          },
          '&:hover fieldset': {
            borderColor: '#bb86fc !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#bb86fc !important',
          },
        },
        input: {
          color: '#ffffff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-focused': {
            color: '#bb86fc',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px 24px',
        },
        containedPrimary: {
          backgroundColor: '#007bff',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        },
        outlined: {
          borderColor: '#ffffff',
          color: '#ffffff',
          '&:hover': {
            borderColor: '#bb86fc',
            backgroundColor: 'rgba(187, 134, 252, 0.08)',
            color: '#bb86fc',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#bb86fc',
          textDecoration: 'none',
          transition: 'color 0.3s ease, text-decoration 0.3s ease',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#bb86fc',
          '&.Mui-checked': {
            color: '#bb86fc',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ffffff',
        },
      },
    },
  },
}); 