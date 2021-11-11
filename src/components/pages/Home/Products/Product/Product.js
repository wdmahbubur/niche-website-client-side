import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
const Product = () => {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://i.ibb.co/NjqXqMc/dron-landing-1-copyright.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Acer Drone E15
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined">Order Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;