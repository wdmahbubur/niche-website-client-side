import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Rating, Snackbar, Alert } from '@mui/material';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../hooks/useAuth';
import axios from 'axios';
import Loading from '../../../../Loading/Loading';

const Review = ({ setPage }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [ratting, setRatting] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setPage("Review")
    }, [setPage])

    const handleRatting = e => {
        setRatting(e.target.value);
    }

    async function onSubmit(data) {
        setLoading(true);
        data.uid = user.uid;
        data.username = user.displayName;
        data.photo = user.photoURL;
        data.ratting = ratting;

        await axios.post('https://frozen-chamber-34165.herokuapp.com/review', {
            data: data
        }).then(res => {
            if (res) {
                setSuccess(true);
                reset();
            }
        }).catch(error => {
            setError(true);
        })
            .finally(() => setLoading(false));

    }
    return (
        <Box>
            {
                loading && <Loading />
            }
            <Box sx={{ mb: 2, color: "info.main", textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Give Feedback
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField variant="outlined" label="Feedback" multiline fullWidth rows={4} sx={{ my: 2 }} {...register("feedback", { required: true })} />

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <label>Give Ratting: </label>
                        <Rating name="half-rating" precision={0.5} onChange={handleRatting} />
                    </Box>

                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Thanks for your feedback
                    </Alert>
                </Snackbar>
            }
            {
                error && <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(false)}>
                    <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                        An error occurred!
                    </Alert>
                </Snackbar>
            }
        </Box>
    );
};

export default Review;