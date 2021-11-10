import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';

const Products = () => {
    return (
        <Container>
            <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                    Our Latest Drone
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box>
                <Grid container spacing={2}>
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

                </Grid>
            </Box>
        </Container>

    );
};

export default Products;