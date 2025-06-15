import React from 'react';
import { TextField, Button, Box, Link, Typography, Divider } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from '@mui/icons-material/Facebook';
import { AuthLayout } from './Auth';

export const ForgotPasswordScreen: React.FC = () => {
  return (
    <AuthLayout title="Recover Password" subtitle="Empower Your Music">
      <Box component="form" sx={{
        mt: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
        <Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="off"
            autoFocus
            variant="outlined"
            sx={{
              input: { color: 'white' },
              label: { color: 'white' }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirm-email"
            label="Confirm Email"
            name="confirmEmail"
            autoComplete="off"
            variant="outlined"
            sx={{
              input: { color: 'white' },
              label: { color: 'white' }
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2,
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            New Password
          </Button>
          <Divider sx={{ my: 2, '&::before, &::after': { borderColor: 'white' } }}>
            <Link href="#" variant="body2" sx={{ color: 'white' }}>
              or Reset with
            </Link>
          </Divider>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 2, borderColor: '#ffffff', color: '#ffffff' }}
            startIcon={<FcGoogle fontSize="small" />}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{ mb: 3, borderColor: '#ffffff', color: '#ffffff' }}
            startIcon={<FacebookIcon sx={{ color: '#1877F2' }} />}
          >
            Facebook
          </Button>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
          color: 'white',
        }}>
          <Typography variant="body2">
            Remember your password?{' '}
          </Typography>
          <Link href="/login" variant="body2" sx={{ color: 'white', fontWeight: 'bold', ml: 0.5 }}>
            Back to Login
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}; 