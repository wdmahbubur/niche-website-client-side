import { Box, Container, Grid, Paper, Typography, TextField, Button, Link, Divider } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
const Register = () => {
    return (
        <Box sx={{ my: 10 }}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item md={6}>
                        <Paper elevation={0} sx={{ width: { xs: 1, md: '70%' }, mx: 'auto' }}>
                            <Typography variant="h6" sx={{ textAlign: 'center', color: '#5c5c5c', mb: 3 }}>
                                Register
                            </Typography>
                            <form >
                                <TextField variant="standard" label="Name" fullWidth sx={{ mt: 2 }} />
                                <TextField variant="standard" type="email" label="Email" fullWidth sx={{ mt: 2 }} />
                                <TextField variant="standard" type="password" label="Password" fullWidth sx={{ mt: 2 }} />
                                <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Submit</Button>
                            </form>
                            <Typography variant="body1" sx={{ textAlign: 'center', color: '#5c5c5c', my: 2 }}>
                                Already have a account? <Link as={NavLink} to="/login" underline="none" sx={{ color: "success.main" }} > Please Login</Link>
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Button variant="contained" fullWidth color="warning" >Register With Google</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img src="https://i.ibb.co/gVtbSZT/Mobile-login-pana.png" alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;