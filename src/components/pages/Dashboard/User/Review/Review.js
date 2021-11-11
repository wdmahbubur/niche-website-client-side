import React, { useEffect } from 'react';
import { Box, TextField, Typography, Button, Rating } from '@mui/material';

const Review = ({ setPage }) => {
    useEffect(() => {
        setPage("Review")
    }, [setPage])

    const handleRatting = e => {
        console.log(e.target.value)
    }
    return (
        <div>
            <Box sx={{ mb: 2, color: "info.main", textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Give Feedback
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                <form>
                    <TextField variant="outlined" label="Feedback" multiline fullWidth rows={4} sx={{ my: 2 }} />
                    <label>Give Ratting: </label>
                    <Rating name="half-rating" precision={0.5} onChange={handleRatting} />
                    <Button variant="contained" type="submit" sx={{ display: 'block', mt: 2 }}>Submit</Button>
                </form>
            </Box>
        </div>
    );
};

export default Review;