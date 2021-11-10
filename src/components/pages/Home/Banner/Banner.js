import React from 'react';
import { Swiper } from "swiper/react/swiper-react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Grid, Typography, Container, Box, Button } from '@mui/material'
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
    return (
        <Box>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide>
                    <Container>
                        <Grid container spacing={2} sx={{ py: 10 }}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                <Typography variant="h1" sx={{ fontWeight: '500', color: 'text.secondary' }}>
                                    BuzzBee<br />
                                    Nano Drone
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Ideal For Indoor Usage & Ultra Portable. 3 User Modes, Junior, Intermediate & Healess.
                                </Typography>
                                <Button variant="outlined" sx={{ mt: 4 }}>Shop Now</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <img src="https://i.ibb.co/m5ss3dF/inner-product-06-1200x640.png" alt="" />
                            </Grid>
                        </Grid>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Grid container spacing={2} sx={{ py: 10 }}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                <Typography variant="h1" sx={{ fontWeight: '500', color: 'text.secondary' }}>
                                    Elomus F18 <br />
                                    Drone 3 Auto
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Newest Hover Function, Elomus F18 Drone 3 Auto Quadcopter UFO With 2Mp Wifi Camera.
                                </Typography>
                                <Button variant="outlined" sx={{ mt: 4 }}>Shop Now</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <img src="https://i.ibb.co/Xyc4kXf/img-static2-elomus1.jpg" alt="" />
                            </Grid>
                        </Grid>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Grid container spacing={2} sx={{ py: 10 }}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                <Typography variant="h2" sx={{ fontWeight: '600', color: 'text.secondary' }}>
                                    Many Great Ways<br />
                                    To Use Drones
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                                    We currently operate in the Brooklyn area outside of a 20 mile radius may require travel expenses.
                                </Typography>
                                <Button variant="outlined" sx={{ mt: 4 }}>More Info</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <img src="https://i.ibb.co/NjqXqMc/dron-landing-1-copyright.png" alt="" />
                            </Grid>
                        </Grid>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </Box >
    );
};

export default Banner;