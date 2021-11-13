import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Link, Container, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { NavHashLink } from 'react-router-hash-link';
import axios from 'axios';

const Footer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://frozen-chamber-34165.herokuapp.com/products?size=4')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <Box sx={{ bgcolor: 'info.main', py: 5 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
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
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700, ml: { xs: 0, md: 5 } }}>
                            Our Latest Drone
                        </Typography>
                        <List sx={{ mt: 2, color: '#ddd', ml: { xs: 0, md: 5 } }}>
                            {
                                products.map(product => <ListItem sx={{ pl: 0, py: .5 }} key={product._id}>
                                    <ListItemText sx={{ my: 0 }}>
                                        <Link as={NavLink} to={`/product/${product._id}`}
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
                                            }}>{product.productName}</Link>
                                    </ListItemText>
                                </ListItem>)
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700, ml: { xs: 0, md: 5 } }}>
                            Links
                        </Typography>
                        <List sx={{ mt: 2, color: '#ddd', ml: { xs: 0, md: 5 } }}>
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
                            <ListItem sx={{ pl: 0, py: .5 }}>
                                <ListItemText sx={{ my: 0 }}>
                                    <Link smooth as={NavHashLink} to="/#contact"
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
                                        }}>Contact</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" component="div" sx={{ color: '#fff', fontWeight: 700 }}>
                            Newsletter
                        </Typography>
                        <form style={{ marginTop: 16, color: '#fff' }} className="email-subscribe">
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