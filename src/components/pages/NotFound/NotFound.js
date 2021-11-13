import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    let navigate = useNavigate();
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img src="https://i.ibb.co/qryPFJJ/Oops-404-Error-with-a-broken-robot-rafiki.png" alt="" style={{ width: '100%', height: '80vh' }} />
            <Button variant="contained" onClick={() => navigate('/', { replace: true })}>Go To Home</Button>
        </Box>
    );
};

export default NotFound;