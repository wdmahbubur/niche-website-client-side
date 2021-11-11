import { Typography, Box, Paper, Container, Rating } from '@mui/material';
import React from 'react';
import { Swiper } from "swiper/react/swiper-react";
import { SwiperSlide } from "swiper/react/swiper-slide";

import SwiperCore, { Pagination } from 'swiper';
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Pagination]);

const Reviews = () => {

    return (
        <Box sx={{ py: 5 }} id="review">
            <Container>
                <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                        What Our Clients Say
                    </Typography>
                    <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                </Box>
                <Box sx={{ py: 5 }}>
                    <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                        "clickable": true
                    }} breakpoints={{
                        "640": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 40
                        },
                        "1024": {
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        }
                    }} className="mySwiper">
                        <SwiperSlide style={{ width: '30%' }}>
                            <Paper sx={{ p: 4, mb: 5 }}>
                                <img src="https://i.ibb.co/d7ygTJt/handsome-confident-smiling-man-with-hands-crossed-chest-176420-18743.jpg" alt="" style={{ height: 120, width: 120, borderRadius: '50%', margin: '0px auto' }} />
                                <blockquote style={{ color: '#636363' }}>
                                    "My business provides professional wedding media and I was looking for a drone pilot to partner with for aerial videos and photography.I received various quotes and have selected a couple of drone pilots to work with.Very easy process overall, highly recommended to everyone who like quality."
                                </blockquote>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                                <Typography variant="h6">
                                    Robert Thomson
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '30%' }}>
                            <Paper sx={{ p: 4, mb: 5 }}>
                                <img src="https://i.ibb.co/d7ygTJt/handsome-confident-smiling-man-with-hands-crossed-chest-176420-18743.jpg" alt="" style={{ height: 120, width: 120, borderRadius: '50%', margin: '0px auto' }} />
                                <blockquote style={{ color: '#636363' }}>
                                    "My business provides professional wedding media and I was looking for a drone pilot to partner with for aerial videos and photography.I received various quotes and have selected a couple of drone pilots to work with.Very easy process overall, highly recommended to everyone who like quality."
                                </blockquote>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <Typography variant="h6">
                                    Robert Thomson
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '30%' }}>
                            <Paper sx={{ p: 4, mb: 5 }}>
                                <img src="https://i.ibb.co/d7ygTJt/handsome-confident-smiling-man-with-hands-crossed-chest-176420-18743.jpg" alt="" style={{ height: 120, width: 120, borderRadius: '50%', margin: '0px auto' }} />
                                <blockquote style={{ color: '#636363' }}>
                                    "My business provides professional wedding media and I was looking for a drone pilot to partner with for aerial videos and photography.I received various quotes and have selected a couple of drone pilots to work with.Very easy process overall, highly recommended to everyone who like quality."
                                </blockquote>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <Typography variant="h6">
                                    Robert Thomson
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: '33%' }}>
                            <Paper sx={{ p: 4, mb: 5 }}>
                                <img src="https://i.ibb.co/d7ygTJt/handsome-confident-smiling-man-with-hands-crossed-chest-176420-18743.jpg" alt="" style={{ height: 120, width: 120, borderRadius: '50%', margin: '0px auto' }} />
                                <blockquote style={{ color: '#636363' }}>
                                    "My business provides professional wedding media and I was looking for a drone pilot to partner with for aerial videos and photography.I received various quotes and have selected a couple of drone pilots to work with.Very easy process overall, highly recommended to everyone who like quality."
                                </blockquote>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                <Typography variant="h6">
                                    Robert Thomson
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                    </Swiper>
                </Box>

            </Container >
        </Box >
    );
};

export default Reviews;