import React, { useState } from 'react';
import { TextField, Button, Box, Link, FormControlLabel, Checkbox, IconButton, InputAdornment, Divider, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { AuthLayout } from './Auth';

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
          sx={{ color: 'white' }}
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
          Log In
        </Button>
        <Divider sx={{ my: 2, '&::before, &::after': { borderColor: 'white' } }}>
          <Link href="#" variant="body2" sx={{ color: 'white' }}>
            or Log in with
          </Link>
        </Divider>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, borderColor: '#ffffff', color: '#ffffff' }}
          startIcon={<FcGoogle size={20} />}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 3, borderColor: '#ffffff', color: '#ffffff' }}
          startIcon={<FaFacebook size={20} color="#1877F2" />}
        >
          Facebook
        </Button>
        <Link href="/forgot-password" variant="body2" sx={{ color: '#fff', alignSelf: 'flex-end', fontWeight: 'bold', mb: 2 }}>
          Forgot password?
        </Link>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
          color: '#fff',
        }}>
          <Typography variant="body2">
            Don't have an account?{' '}
          </Typography>
          <Link href="/signup" variant="body2" sx={{ color: '#fff', fontWeight: 'bold', ml: 0.5 }}>
            Sign up
          </Link>
        </Box>
      </Box>
    </AuthLayout>
  );
}; 