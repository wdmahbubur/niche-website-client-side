import { Container, Box, Typography, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import Product from '../../Product/Product';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://frozen-chamber-34165.herokuapp.com/products')
            .then(res => setProducts(res.data))
            .finally(() => setLoading(false))
    }, [])
    return (
        <Box sx={{ pb: 5 }}>
            <Container>
                {
                    loading && <Loading />
                }
                <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontSize: { xs: 30 } }}>
                        Explore More Drone
                    </Typography>
                    <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                </Box>
                <Box sx={{ pt: 5 }}>
                    <Grid container spacing={2} sx={{ rowGap: 4 }}>
                        {
                            products.map(product => <Product key={product._id} product={product} />)
                        }


                    </Grid>
                </Box>

            </Container>
        </Box>
    );
};

export default Explore;