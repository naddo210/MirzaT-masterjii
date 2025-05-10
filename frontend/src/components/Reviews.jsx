import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  Box,
  CircularProgress
} from '@mui/material';
import axios from 'axios';
import './Reviews.css';

const API_URL = 'https://mirzat.onrender.com/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews`);
      setReviews(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Error loading reviews');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" className="reviews-section">
      <Typography
        variant="p"
        className="section-title"
        color={"text.secondary"}
        component="p"
        align="center"
        gutterBottom>
        <b>we believe our service speaks for itself</b> —but nothing is
              more powerful than{" "}
              <b>hearing directly from those who have experienced it</b> . Below
              are heartfelt testimonials from our valued pilgrims who have
              journeyed with us for <b>Hajj, Umrah, and Ziyarat tours.</b>
      </Typography>
      <Grid container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review._id}>
            <Card className="review-card" elevation={3}>
              <CardContent>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="reviewer-name">
                    {review.name}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Rating
                      value={Number(review.rating)}
                      readOnly
                      size="small"
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    className="review-comment"
                    sx={{
                      mt: 1,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}>
                    {review.description || "No comment provided"}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
