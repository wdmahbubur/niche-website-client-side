import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import Product from '../../../Product/Product';

const Products = () => {
    return (
        <Box id="latestProducts">
            <Container sx={{ py: 5 }}>
                <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontSize: { xs: 30 } }}>
                        Our Latest Drone
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
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Products;