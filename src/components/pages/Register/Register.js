import { Box, Container, Grid, Paper, Typography, TextField, Button, Link, Divider, Toolbar, Snackbar, Alert } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import Loading from '../../Loading/Loading';

const Register = () => {
    const { registration, googleSignIn, loading, success, error, setSuccess, setError, user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    let navigate = useNavigate();

    async function onSubmit(data) {
        await registration(data.name, data.email, data.password);
        reset();
    }
    const url = '/';
    useEffect(() => {
        if (user?.email) {
            navigate(url, { replace: true });
        }
    }, [user, navigate])

    console.log(user);
    return (
        <Box sx={{ my: 10 }}>
            <Toolbar />
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item md={6}>
                        <Paper elevation={0} sx={{ width: { xs: 1, md: '70%' }, mx: 'auto' }}>
                            <Typography variant="h6" sx={{ textAlign: 'center', color: '#5c5c5c', mb: 3 }}>
                                Register
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField variant="standard" label="Name" fullWidth sx={{ mt: 2 }} {...register("name", { required: true })} />
                                <TextField variant="standard" type="email" label="Email" fullWidth sx={{ mt: 2 }} {...register("email", { required: true })} />
                                <TextField variant="standard" type="password" label="Password" fullWidth sx={{ mt: 2 }} {...register("password", { required: true })} />
                                <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Submit</Button>
                            </form>
                            <Typography variant="body1" sx={{ textAlign: 'center', color: '#5c5c5c', my: 2 }}>
                                Already have a account? <Link as={NavLink} to="/login" underline="none" sx={{ color: "success.main" }} > Please Login</Link>
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Button variant="contained" fullWidth color="warning" onClick={googleSignIn} >Register With Google</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img src="https://i.ibb.co/gVtbSZT/Mobile-login-pana.png" alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
            {
                loading && <Loading />
            }
            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Registration Successful
                    </Alert>
                </Snackbar>
            }
            {
                error && <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(false)}>
                    <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
            }
        </Box>
    );
};

export default Register;