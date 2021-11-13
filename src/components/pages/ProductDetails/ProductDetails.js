import React, { useEffect, useState } from 'react';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';

import axios from 'axios';
import Loading from '../../Loading/Loading';
import PlaceOrder from './PlaceOrder/PlaceOrder';
const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    let params = useParams();

    useEffect(() => {
        setLoading(true)
        axios.get(`https://frozen-chamber-34165.herokuapp.com/products/${params.productId}`)
            .then(res => {
                setProduct(res.data);
            }).finally(() => setLoading(false));
    }, [params.productId])
    return (
        <Box sx={{ mb: 10 }}>
            ]<Container>
                {
                    loading && <Loading />
                }
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <img src={product.photo} alt="" style={{ width: '100%', height: '400px' }} />
                        </Grid>
                        <Grid item md={6}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: 'GrayText' }}>
                                {product.productName}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, color: 'info.main' }}>
                                ${product.price}
                            </Typography>
                            <Typography variant="body2" component="div">
                                {product.description}
                            </Typography>
                            <Divider sx={{ my: 3 }} />
                            <Typography gutterBottom variant="body1" component="div">
                                Brand:
                                <Typography variant="body1" sx={{ color: 'info.main', display: 'inline', ml: 1 }}> {product.brand}</Typography>
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Availability:
                                <Typography variant="body1" sx={{ color: 'info.main', display: 'inline', ml: 1 }}> {product.stock > 0 ? "In Stock" : "Out Of Stock"} </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <PlaceOrder productName={product.productName} price={product.price} setLoading={setLoading} />

            </Container >
        </Box >
    );
};

export default ProductDetails;