import { Container, Box, Typography, Grid } from '@mui/material';
import Product from '../../../Product/Product';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../../Loading/Loading';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/products?size=6')
            .then(res => {
                setProducts(res.data)
                setLoading(false);
            })
    }, [])
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
                        {
                            products.map(product => <Product key={product._id} product={product} />)
                        }
                    </Grid>
                </Box>
            </Container>
            {
                loading && <Loading />
            }
        </Box>
    );
};

export default Products;