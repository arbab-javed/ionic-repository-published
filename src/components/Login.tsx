import { useState } from 'react';
import { 
  TextField, 
  Button, 
  IconButton,
  Typography,
  Link
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { AuthFormLayout } from '../components/AuthForm';

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AuthFormLayout title="Login" subtitle="Empower Your Music">
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
        sx={{ mb: 1 }}
      />
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Link href="#" variant="body2">
          Forgot Password?
        </Link>
      </Box>
      
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ mb: 2 }}
      >
        Login
      </Button>
      
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          or Login with
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
        Don't have an account?{' '}
        <Button 
          variant="text" 
          size="small"
          sx={{ textTransform: 'none' }}
        >
          Sign up
        </Button>
      </Typography>
    </AuthFormLayout>
  );
};