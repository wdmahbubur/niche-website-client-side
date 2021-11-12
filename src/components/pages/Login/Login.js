import { Box, Container, Grid, Paper, Typography, TextField, Button, Divider, Link, Toolbar, Snackbar, Alert } from '@mui/material';
import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Loading from '../../Loading/Loading';

const Login = () => {
    const { login, user, loading, success, error, setSuccess, setError, googleSignIn } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    let navigate = useNavigate();
    const location = useLocation();

    async function onSubmit(data) {
        await login(data.email, data.password);
        reset();
    }
    const url = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user?.email) {
            navigate(url, { replace: true });
        }
    }, [user, navigate, url])

    return (
        <Box sx={{ mb: 10 }}>
            <Toolbar />
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item md={6}>
                        <Paper elevation={0} sx={{ width: { xs: 1, md: '70%' }, mx: 'auto' }}>
                            <Typography variant="h6" sx={{ textAlign: 'center', color: '#5c5c5c', mb: 3 }}>
                                Login
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField variant="standard" type="email" label="Email" fullWidth sx={{ mt: 2 }} {...register("email", { required: true })} />
                                <TextField variant="standard" type="password" label="Password" fullWidth sx={{ mt: 2 }} {...register("password", { required: true })} />
                                <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>Login</Button>
                            </form>
                            <Typography variant="body1" sx={{ textAlign: 'center', color: '#5c5c5c', my: 2 }}>
                                <Link as={NavLink} to="/register" underline="none" sx={{ color: "success.main" }} >Create New Account</Link>
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Button variant="contained" fullWidth color="warning" onClick={googleSignIn}>Login With Google</Button>
                        </Paper>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img src="https://i.ibb.co/s23BQsr/Mobile-login-bro.png" alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
            {
                loading && <Loading />
            }
            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Login Successful
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

export default Login;