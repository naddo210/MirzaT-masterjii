import { useState, useEffect } from 'react';
import { Container, Grid, Paper, List, ListItem, ListItemText, Typography, Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';
import './AdminPanel.css';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [location.pathname]); // Check auth on route change

  const checkAuth = () => {
    const authToken = localStorage.getItem('adminAuth');
    if (!authToken) {
      setIsAuthenticated(false);
      return;
    }
    // Verify the token format
    try {
      const [username, password] = atob(authToken).split(':');
      if (username !== 'adminMirza' || password !== 'Mirza@0210') {
        handleLogout();
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      handleLogout();
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <Container 
      maxWidth="xl" // Changed from lg to xl for larger screens
      sx={{ 
        mt: { xs: 8, sm: 9, md: 10, lg: 12 }, // Added lg breakpoint
        mb: { xs: 2, sm: 3, md: 4, lg: 6 },
        px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }, // Added xl breakpoint
        maxWidth: { xl: '2000px' } // Maximum width for very large screens
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}> {/* Added larger spacing for bigger screens */}
        {/* Sidebar */}
        <Grid item xs={12} md={3} lg={2.5}> {/* Adjusted width for large screens */}
          <Paper 
            elevation={3}
            sx={{ 
              p: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
              mb: { xs: 2, md: 0 },
              position: 'sticky',
              top: { xs: 80, md: 88, lg: 96 },
              zIndex: 1,
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              borderRadius: { xs: 2, lg: 3 },
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              minHeight: { lg: 'calc(100vh - 120px)' }, // Minimum height for large screens
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: { xs: 2, lg: 3 },
              borderBottom: '2px solid rgb(36, 48, 174)',
              pb: { xs: 1, lg: 2 }
            }}>
              <Typography 
                variant="h6" 
                component="h2" 
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.25rem', lg: '1.5rem' },
                  color: '#1a237e',
                  fontWeight: 600,
                }}
              >
                Admin Dashboard
              </Typography>
              <Button 
                variant="outlined" 
                color="primary" 
                size={isMobile ? "small" : "medium"}
                onClick={handleLogout}
                sx={{ 
                  borderColor: '#1a237e',
                  color: '#fff',
                  '&:hover': {
                    borderColor: '#0d1642',
                    backgroundColor: 'rgba(26, 35, 126, 0.05)'
                  },
                  px: { lg: 3 },
                  py: { lg: 1 }
                }}
              >
                Logout
              </Button>
            </Box>

            <List sx={{ 
              display: { xs: 'flex', md: 'block' }, 
              justifyContent: 'center',
              flexGrow: 1,
              '& .MuiListItem-root': {
                mb: { xs: 1, lg: 2 },
                px: { xs: 1, sm: 2, lg: 3 },
                py: { xs: 0.5, sm: 1, lg: 2 }
              }
            }}>
              <ListItem 
                button 
                component={Link} 
                to="/admin/reviews"
                sx={{
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  width: { xs: 'auto', md: '100%' },
                  bgcolor: location.pathname === '/admin/reviews' ? 'rgba(26, 35, 126, 0.1)' : 'transparent',
                  borderRadius: 1,
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(26, 35, 126, 0.15)',
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <ListItemText 
                  primary="Manage Reviews" 
                  sx={{ 
                    textAlign: { xs: 'center', md: 'left' },
                    '& .MuiTypography-root': {
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      color: location.pathname === '/admin/reviews' ? '#1a237e' : 'text.primary',
                      fontWeight: location.pathname === '/admin/reviews' ? 600 : 400
                    }
                  }}
                />
              </ListItem>

              <ListItem 
                button 
                component={Link} 
                to="/admin/packages"
                sx={{
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  width: { xs: 'auto', md: '100%' },
                  bgcolor: location.pathname === '/admin/packages' ? 'rgba(26, 35, 126, 0.1)' : 'transparent',
                  borderRadius: 1,
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(26, 35, 126, 0.15)',
                    transform: 'translateX(5px)'
                  }
                }}
              >
                <ListItemText 
                  primary="Manage Packages" 
                  sx={{ 
                    textAlign: { xs: 'center', md: 'left' },
                    '& .MuiTypography-root': {
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      color: location.pathname === '/admin/packages' ? '#1a237e' : 'text.primary',
                      fontWeight: location.pathname === '/admin/packages' ? 600 : 400
                    }
                  }}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        {/* Main Content */}
        <Grid item xs={12} md={9} lg={9.5}>
          <Paper 
            elevation={3}
            sx={{ 
              p: { xs: 1.5, sm: 2, md: 3, lg: 4 },
              minHeight: { xs: 'auto', md: '70vh', lg: 'calc(100vh - 120px)' },
              borderRadius: { xs: 2, lg: 3 },
              background: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              overflowX: 'auto'
            }}
          >
            <Outlet />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
