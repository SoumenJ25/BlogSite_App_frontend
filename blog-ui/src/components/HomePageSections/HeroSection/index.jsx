import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import './Hero.css';

const Hero = () => {
    return (
        <Box className="hero-container">
            <Typography variant="h4" className="hero-title">
                Welcome to BlogSite
            </Typography>

            <Typography variant="body1" className="hero-subtitle">
                Your place to read, write, and share amazing stories with the world.
            </Typography>

            <Button
                variant="contained"
                className="hero-cta-btn"
                component={RouterLink}
                to='/publicBlogs'
            >
                Explore Articles
            </Button>
        </Box>
    );
};

export default Hero;