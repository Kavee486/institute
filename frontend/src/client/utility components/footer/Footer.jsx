// src/Footer.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary">
        Contact us  : (76) 809 0225 | Email : institute.pawara@gmail.com
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
