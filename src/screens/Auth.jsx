import React from 'react';
import { Box, Typography, Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { GiMusicalNotes } from 'react-icons/gi';

const theme = createTheme({
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

export const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
        background: '#121212',
      }}>
        <Container component="main" maxWidth="xs" sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
          backgroundImage: 'url("/wavy-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          position: 'relative',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem',
          }}>
            <GiMusicalNotes size={80} color="#bb86fc" />
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
              {title || 'Welcome to Spyral'}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#fff' }}>
              {subtitle || 'Empower Your Music'}
            </Typography>
            {/* Pagination Dots */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2, // Margin top for spacing below subtitle
            }}>
              <Box sx={{
                width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fff', margin: '0 4px',
              }} />
              <Box sx={{
                width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '0 4px',
              }} />
              <Box sx={{
                width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '0 4px',
              }} />
            </Box>
          </Box>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}; 