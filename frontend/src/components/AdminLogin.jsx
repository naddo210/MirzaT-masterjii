import { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'adminMirza' && credentials.password === 'Mirza@0210') {
      const authToken = btoa(`${credentials.username}:${credentials.password}`);
      localStorage.setItem('adminAuth', authToken);
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Admin Login
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom align="center">
          only admin can access this page
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;