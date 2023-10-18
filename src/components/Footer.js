import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#4bcffa', padding: '20px', height:'30%' }}>
      <Container maxWidth="xl">
        <Typography variant="h6">
          Copyright &copy; 2023
        </Typography>
        <Typography variant="body2">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;