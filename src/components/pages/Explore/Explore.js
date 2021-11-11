import { Container, Box, Typography, Grid, Pagination } from '@mui/material';
import React from 'react';
import Product from '../../Product/Product';
import './Explore.css';

const Explore = () => {
    return (
        <Box sx={{ pb: 5 }}>
            <Container>
                <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontSize: { xs: 30 } }}>
                        Explore More Drone
                    </Typography>
                    <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                </Box>
                <Box sx={{ pt: 5 }}>
                    <Grid container spacing={2} sx={{ rowGap: 4 }}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </Grid>
                </Box>
                <Box sx={{ my: 4 }}>
                    <Pagination count={5} />
                </Box>
            </Container>
        </Box>
    );
};

export default Explore;