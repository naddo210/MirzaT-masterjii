import { Container, Grid, Typography, Link, Box, useTheme, useMediaQuery } from '@mui/material';
import SocialShare from './SocialShare';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#3f51b5', 
        color: 'white', 
        py: { xs: 1, sm: 2, md: 3 },
        mt: 'auto',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        boxSizing: 'border-box'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}> {/* Reduced spacing for small screens */}
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' }, // Smaller font for mobile
                fontWeight: 600,
                mb: { xs: 0.5, sm: 1 } // Reduced margin for mobile
              }}
            >
              MIRZA HAJJ & UMRAH TOURS
            </Typography>
            <Typography 
              sx={{
                mb: { xs: 0.5, sm: 1 }, // Reduced margin for mobile
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                lineHeight: { xs: 1.4, sm: 1.6 } // Reduced line height for mobile
              }}
            >
              Your trusted partner for spiritual journeys.
              Making your Hajj and Umrah experience memorable and meaningful.
            </Typography>
            <Box sx={{ mt: { xs: 1, sm: 2 } }}> {/* Reduced margin for mobile */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, sm: 1 } }}>
                <LocationOnIcon sx={{ mr: 0.5, fontSize: { xs: '0.9rem', sm: '1rem' } }} />
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem' } }}>Anas Mansion,56th K-villa, Thane(west), Maharashtra</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>+91 9967043112</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>info.mirzatours@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                fontWeight: 600,
                mb: { xs: 0.5, sm: 1 }
              }}
            >
              Quick Links
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                '& a': {
                  color: 'white',
                  textDecoration: 'none',
                  mb: { xs: 0.5, sm: 1 },
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                  transition: 'opacity 0.3s',
                  '&:hover': {
                    opacity: 0.8
                  }
                }
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/admin">Upload</Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 600,
                mb: 1
              }}
            >
              Connect With Us
            </Typography>
            <SocialShare />
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: { xs: 1, sm: 2, md: 3 },
            pt: { xs: 1, sm: 2 },
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              opacity: 0.8,
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }
            }}
          >
            © {new Date().getFullYear()} MIRZA HAJJ & UMRAH. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              mt: 0.5, // Reduced margin
              opacity: 0.8,
              fontSize: { xs: '0.75rem', md: '0.8rem' }
            }}
          >
            ⊕ Designed by{' '}
            <Link 
              href="https://www.linkedin.com/in/nadeem-salmani-42913934a/" 
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Nadeem Salmani
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
