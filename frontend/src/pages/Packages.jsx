import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import './Packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/packages');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          component="h1"
          color="text.secondary"
          gutterBottom>
          Begin Your spiritual Adventure
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Choose the perfect package for your spiritual journey.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} md={4} key={pkg._id || index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={pkg.image}
                alt={pkg.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pkg.title}
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                  ₹{pkg.price}
                </Typography>
                <Chip label={pkg.duration} sx={{ mb: 2 }} />
                {pkg.features.map((feature, idx) => (
                  <Typography key={idx} variant="body2" paragraph>
                    • {feature}
                  </Typography>
                ))}
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Packages;
