import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h6" sx={{ my: 5, color: "info.main" }}>
                    Our Latest Drone
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Container>

    );
};

export default Products;