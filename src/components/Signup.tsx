import { useState } from 'react';
import { 
  TextField, 
  Button, 
  IconButton,
  Typography
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { AuthFormLayout } from '../components/AuthForm';

export const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <AuthFormLayout title="Sign up" subtitle="Empower Your Music">
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        sx={{ mb: 3 }}
      />
      
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ mb: 2 }}
      >
        Sign up
      </Button>
      
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          or Sign up with
        </Typography>
      </Divider>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton>
          <Google />
        </IconButton>
        <IconButton>
          <Facebook />
        </IconButton>
      </Box>
      
      <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
        Already have an account?{' '}
        <Button 
          variant="text" 
          size="small"
          sx={{ textTransform: 'none' }}
        >
          Login
        </Button>
      </Typography>
    </AuthFormLayout>
  );
};