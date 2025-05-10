import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PackageManager = () => {
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({
    title: '',
    price: '',
    duration: '',
    features: '',
    image: ''
  });

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await fetch('https://mirzat-masterjii.onrender.com/api/packages');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPackages(data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = currentPackage._id ? 'PUT' : 'POST';
      const url = currentPackage._id 
        ? `https://mirzat-masterjii.onrender.com/api/packages/${currentPackage._id}`
        : 'https://mirzat-masterjii.onrender.com/api/packages';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...currentPackage,
          features: currentPackage.features.split('\n').filter(f => f.trim())
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.ok) {
        setOpen(false);
        fetchPackages();
        setCurrentPackage({
          title: '',
          price: '',
          duration: '',
          features: '',
          image: ''
        });
      }
    } catch (error) {
      console.error('Error saving package:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        const response = await fetch(`https://mirzat-masterjii.onrender.com/api/packages/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        fetchPackages();
      } catch (error) {
        console.error('Error deleting package:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Manage Packages</Typography>
        <Button 
          variant="contained" 
          onClick={() => {
            setCurrentPackage({
              title: '',
              price: '',
              duration: '',
              features: '',
              image: ''
            });
            setOpen(true);
          }}
        >
          Add New Package
        </Button>
      </Box>

      <Grid container spacing={3}>
        {packages.map((pkg) => (
          <Grid item xs={12} md={6} key={pkg._id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6">{pkg.title}</Typography>
                  <Box>
                    <IconButton onClick={() => {
                      setCurrentPackage({
                        ...pkg,
                        features: pkg.features.join('\n')
                      });
                      setOpen(true);
                    }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(pkg._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography color="primary">₹{pkg.price}</Typography>
                <Typography>{pkg.duration}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          {currentPackage._id ? 'Edit Package' : 'Add New Package'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={currentPackage.title}
                  onChange={(e) => setCurrentPackage({...currentPackage, title: e.target.value})}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price"
                  value={currentPackage.price}
                  onChange={(e) => setCurrentPackage({...currentPackage, price: e.target.value})}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Duration"
                  value={currentPackage.duration}
                  onChange={(e) => setCurrentPackage({...currentPackage, duration: e.target.value})}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Features (one per line)"
                  multiline
                  rows={4}
                  value={currentPackage.features}
                  onChange={(e) => setCurrentPackage({...currentPackage, features: e.target.value})}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  value={currentPackage.image}
                  onChange={(e) => setCurrentPackage({...currentPackage, image: e.target.value})}
                  required
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default PackageManager;
