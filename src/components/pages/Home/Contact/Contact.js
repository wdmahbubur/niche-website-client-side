import { Box, Container, TextField, Typography, Button } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <Box sx={{ my: 5 }} id="contact">
            <Container>
                <Box sx={{ mb: 2, color: "info.main", textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                        Get In Touch
                    </Typography>
                    <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                </Box>
                <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                    <form>
                        <TextField variant="outlined" label="Name" fullWidth sx={{ my: 2 }} />
                        <TextField variant="outlined" label="Email" fullWidth sx={{ my: 2 }} />
                        <TextField variant="outlined" label="Subject" fullWidth sx={{ my: 2 }} />
                        <TextField variant="outlined" label="Subject" multiline fullWidth rows={4} sx={{ my: 2 }} />
                        <Button variant="contained">Send</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;