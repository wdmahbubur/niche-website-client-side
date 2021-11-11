import React from 'react';
import { Box, Grid, Typography, Link, Container, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'info.main', py: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                            <Link as={NavLink} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
                                DroneBazar
                            </Link>
                        </Typography>

                        <Typography variant="subtitle1" sx={{ mt: 3, color: '#ddd' }}>
                            5961 Santa Fe Ave,Huntington Park, <br /> CA 90255, USA<br />
                            +1 800 341 41 41 +1 800 834 62 74
                            info@DroneBazar.com<br />
                        </Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700, ml: 5 }}>
                            Our Latest Drone
                        </Typography>
                        <List sx={{ mt: 2, color: '#ddd', ml: 5 }}>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link as={NavLink} to="/"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Acer Drone E15</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link as={NavLink} to="/"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Acer Drone E15</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link as={NavLink} to="/"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Acer Drone E15</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700, ml: 5 }}>
                            Links
                        </Typography>
                        <List sx={{ mt: 2, color: '#ddd', ml: 5 }}>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link smooth as={NavHashLink} to="/#home"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Home</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link smooth as={NavHashLink} to="/explore"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Explore</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link smooth as={NavHashLink} to="/#latestProducts"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Latest Drone</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link smooth as={NavHashLink} to="/#review"
                                        sx={{
                                            minWidth: 100,
                                            color: '#fff',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            transition: 'all .4s linear',
                                            ":hover": {
                                                color: '#d1d1d1'
                                            }
                                        }}>Review</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700 }}>
                            Newsletter
                        </Typography>
                        <form style={{ marginTop: 16, color: '#fff' }}>
                            <TextField id="email-basic" fullWidth label="Email" variant="outlined" size="small" sx={{ color: '#fff' }} />
                            <Button variant="outlined" sx={{
                                mt: 3,
                                borderColor: '#fff',
                                color: '#fff',
                                fontWeight: 600,
                                ":hover": {
                                    bgcolor: '#fff',
                                    color: '#000'
                                }
                            }}>
                                Subscribe
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                <hr />
                <Typography variant="caption" component="div" sx={{ color: '#fff' }}>
                    Copyright &copy; 2021. All Rights Reserved By Mahbubur Rahman
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;