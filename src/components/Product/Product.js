import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router';
const Product = ({ product }) => {
    const { _id, productName, description, photo } = product;
    const navigate = useNavigate();
    const GoToOrderPage = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={photo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" onClick={() => GoToOrderPage(_id)}><ShoppingCartIcon />Order Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;