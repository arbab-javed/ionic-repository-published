import { Box, Typography, Divider } from '@mui/material';

interface AuthFormProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const AuthFormLayout = ({ title, subtitle, children }: AuthFormProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 3,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ 
          mb: 1, 
          fontWeight: 'bold',
          color: 'primary.main'
        }}
      >
        Spyral
      </Typography>
      
      <Typography
        variant="subtitle1"
        sx={{
          mb: 4,
          color: 'text.secondary',
        }}
      >
        {subtitle}
      </Typography>
      
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};