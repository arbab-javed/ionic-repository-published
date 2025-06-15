import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { GiMusicalNotes } from 'react-icons/gi';
import { theme } from '../theme/theme';

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: '#121212',
        overflowY: 'hidden',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '2rem',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
          backgroundImage: 'url("/wavy-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          position: 'relative',
          margin: 'auto',
          width: '100%',
          boxSizing: 'border-box',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <GiMusicalNotes size={80} color="#bb86fc" />
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>
            {title || 'Welcome to Spyral'}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff' }}>
            {subtitle || 'Empower Your Music'}
          </Typography>
          {/* Pagination Dots */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fff', margin: '0 4px' }} />
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '0 4px' }} />
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.5)', margin: '0 4px' }} />
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}; 