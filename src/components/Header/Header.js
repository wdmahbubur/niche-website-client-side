import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout'
import { Button, Container, Link } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import TemporaryDrawer from './Drawer/Drawer';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const [drawer, setDrawer] = React.useState(false);
    let navigate = useNavigate();
    const toggleDrawer = () => {
        if (drawer) {
            setDrawer(false);
        } else {
            setDrawer(true)
        }

    }

    const goToLogin = () => {
        navigate('/login', { replace: true })
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Container maxWidth="lg" sx={{ px: { xs: 0 } }}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                            <Link as={NavLink} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
                                DroneBazar
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', textAlign: 'center' }}>
                            <Typography sx={{ mx: 2 }}>
                                <Link smooth as={NavHashLink} to="/#home"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Home</Link>
                            </Typography>

                            <Typography sx={{ mx: 2 }}>
                                <Link as={NavLink} to="/explore"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Explore</Link>
                            </Typography>

                            <Typography sx={{ mx: 2 }}>
                                <Link smooth as={NavHashLink} to="/#latestProducts"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Latest Drone</Link>
                            </Typography>

                            <Typography sx={{ mx: 2 }}>
                                <Link smooth as={NavHashLink} to="/#review"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Review</Link>
                            </Typography>

                            <Typography sx={{ mx: 2 }}>
                                <Link smooth as={NavHashLink} to="/#contact"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Contact</Link>
                            </Typography>

                            <Typography sx={{ mx: 2 }}>Hi! Mahbubur Rahaman</Typography>
                            <Typography sx={{ mx: 2 }}>
                                <Link smooth as={NavHashLink} to="/dashboard"
                                    sx={{
                                        minWidth: 100,
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: 18,
                                        transition: 'all .4s linear',
                                        ":hover": {
                                            color: '#d1d1d1'
                                        }
                                    }}>Dashboard</Link>
                            </Typography>
                            <Button variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    ml: 3,
                                    ":hover": {
                                        backgroundColor: 'success.main'
                                    }
                                }}
                                onClick={goToLogin}
                            >
                                <LoginIcon fontSize="small" sx={{ mr: .5 }} /> Login
                            </Button>
                            {/* <Button variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    ml: 3,
                                    ":hover": {
                                        backgroundColor: 'error.main'
                                    }

                                }}>
                                <Logout fontSize="small" sx={{ mr: .5 }} /> Logout
                            </Button> */}

                        </Box>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: 'block', md: 'none' }, m: 0, p: 0 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <TemporaryDrawer toggleDrawer={toggleDrawer} drawer={drawer} />
        </Box>
    );
};

export default Header;