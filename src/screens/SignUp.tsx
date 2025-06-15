import React, { useState } from 'react';
import { TextField, Button, Box, Link, IconButton, InputAdornment, Divider, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';
import FacebookIcon from '@mui/icons-material/Facebook';
import { AuthLayout } from './Auth';

export const SignUpScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Welcome to Spyral" subtitle="Empower Your Music">
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
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          autoComplete="new-password"
          variant="outlined"
          sx={{
            input: { color: 'white' },
            label: { color: 'white' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ color: 'white' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          id="confirm-password"
          autoComplete="new-password"
          variant="outlined"
          sx={{
            input: { color: 'white' },
            label: { color: 'white' }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                  sx={{ color: 'white' }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
          Sign Up
        </Button>
        <Divider sx={{ my: 2, '&::before, &::after': { borderColor: 'white' } }}>
          <Link href="#" variant="body2" sx={{ color: 'white' }}>
            or Sign up with
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
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, color: '#fff' }}>
          <Typography variant="body2">
            Already have an account?{' '}
          </Typography>
          <Link href="/login" variant="body2" sx={{ color: '#fff', fontWeight: 'bold', ml: 0.5 }}>
            Log in
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}; 