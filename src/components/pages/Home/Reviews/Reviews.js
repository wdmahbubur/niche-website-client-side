import { Typography, Box, Paper, Container, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper } from "swiper/react/swiper-react";
import { SwiperSlide } from "swiper/react/swiper-slide";
import Loading from '../../../Loading/Loading';

import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import axios from 'axios';
SwiperCore.use([Pagination, Autoplay]);

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/review')
            .then(res => {
                if (res.data) {
                    setReviews(res.data);
                }
            }).finally(() => setLoading(false))
    }, [])

    return (
        <Box sx={{ py: 5, backgroundColor: "#fafafa" }} id="review">
            {
                loading && <Loading />
            }
            <Container>
                <Box sx={{ my: 5, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, fontSize: { xs: 30 } }}>
                        What Our Clients Say
                    </Typography>
                    <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                </Box>
                <Box sx={{ py: 5 }}>
                    <Swiper spaceBetween={10} autoplay={{
                        "delay": 5000
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
                        {
                            reviews.map(review =>
                                <SwiperSlide style={{ width: '30%' }} key={review._id}>
                                    <Paper sx={{ p: 4 }}>
                                        <img src={review.photo || 'https://i.ibb.co/rFcCHMw/test.jpg'} alt="" style={{ height: 100, width: 100, borderRadius: '50%', margin: '0px auto' }} />
                                        <Typography variant="body1" sx={{ color: '#636363', my: 2 }}>
                                            {review.feedback}
                                        </Typography>
                                        <Rating name="half-rating" defaultValue={review.ratting} precision={0.5} readOnly />
                                        <Typography variant="h6">
                                            {review.username}
                                        </Typography>
                                    </Paper>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Box>

            </Container >
        </Box >
    );
};

export default Reviews;