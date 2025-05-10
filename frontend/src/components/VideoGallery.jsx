import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Fade,
  useTheme
} from '@mui/material';
import axios from 'axios';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://mirzat.onrender.com/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%)',
        py: { xs: 6, md: 10 },
        mt: { xs: 4, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 2,
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '60px',
                  height: '4px',
                  backgroundColor: theme.palette.primary.main,
                  margin: '15px auto',
                  borderRadius: '2px'
                }
              }}
            >
             Mirza Hajj & Umrah Tours
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'text.secondary',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.8
              }}
            >
                 <b>we believe our service speaks for itself</b> —but nothing is
              more powerful than{" "}
              <b>hearing directly from those who have experienced it</b> . Below
              are heartfelt testimonials from our valued pilgrims who have
              journeyed with us for <b>Hajj, Umrah, and Ziyarat tours.</b>
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={video._id}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8]
                    },
                    borderRadius: '12px',
                    overflow: 'hidden',
                    bgcolor: 'background.paper'
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
{/*                     <CardMedia
                      component="video"
                      controls
                      src={`https://mirzat.onrender.com/${video.videoUrl}`}
                      sx={{
                        position: 'absolute',
                      top: "50%",
                       left: "50%",
                        width: '100%',
                        height: '100%',
                        transform: "translate(-50%, -50%)",
                        objectFit: 'cover'
                      }}
                    /> */}
                   <CardMedia
  component="video"
  controls
  src={video.videoUrl.replace(/^http:\/\//, 'https://')}
  sx={{
    position: 'absolute',
    top: "50%",
    left: "50%",
    width: '100%',
    height: '100%',
    transform: "translate(-50%, -50%)",
    objectFit: 'cover'
  }}
/>



                  </Box>
                  <CardContent 
                    sx={{ 
                      flexGrow: 1,
                      p: 3,
                      bgcolor: 'background.paper'
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        color: 'text.primary',
                        lineHeight: 1.4
                      }}
                    >
                      {video.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoGallery;
