import React from 'react';
import { TextField, Button, Box, Link } from '@mui/material';
import { AuthLayout } from './Auth';

export const ForgotPasswordScreen = () => {
  return (
    <AuthLayout title="Recover Password" subtitle="Empower Your Music">
      <Box component="form" sx={{ mt: 1, width: '100%' }}>
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
        <Link href="/login" variant="body2" sx={{ color: '#fff', alignSelf: 'center', mt: 3, fontWeight: 'bold' }}>
          Back to Login
        </Link>
      </Box>
    </AuthLayout>
  );
}; 