import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Link, MenuItem, MenuList } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import './Drawer.css'
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { Login } from '@mui/icons-material';
export default function TemporaryDrawer({ toggleDrawer, drawer }) {
    const { user, logout } = useAuth();
    return (
        <React.Fragment>
            <Drawer
                anchor='top'
                open={drawer}
                onClose={toggleDrawer}
                sx={{ top: 50 }}
            >
                <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <MenuList>
                        <MenuItem>
                            <Link smooth as={NavHashLink} to="/#home"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1,
                                    display: 'block',
                                    width: 1
                                }}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link as={NavLink} to="/explore"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1,
                                    display: 'block',
                                    width: 1
                                }}>Explore</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link smooth as={NavHashLink} to="/#latestProducts"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1,
                                    display: 'block',
                                    width: 1
                                }}>Latest Products</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link smooth as={NavHashLink} to="/#review"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1,
                                    display: 'block',
                                    width: 1
                                }}>Review</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link smooth as={NavHashLink} to="/#contact"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1,
                                    display: 'block',
                                    width: 1
                                }}>Contact</Link>
                        </MenuItem>
                        <Divider />
                        {
                            user?.email ? <>
                                <MenuItem>
                                    <Link as={NavLink} to="/dashboard"
                                        sx={{
                                            color: '#000000DE',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            ml: 1,
                                            display: 'block',
                                            width: 1
                                        }}>Dashboard</Link>
                                </MenuItem>
                                <MenuItem sx={{
                                    color: 'error.main',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1
                                }}
                                    button onClick={logout}
                                >


                                    <Logout sx={{ fontSize: '18px' }} /> Logout

                                </MenuItem>
                            </>
                                :
                                <MenuItem>
                                    <Link as={NavLink} to="/login"
                                        sx={{
                                            color: '#000000DE',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            fontSize: 16,
                                            ml: 1,
                                            display: 'block',
                                            width: 1
                                        }}>
                                        <Login sx={{ fontSize: '18px' }} /> Login</Link>
                                </MenuItem>
                        }

                    </MenuList>
                </Box>
            </Drawer>
        </React.Fragment>

    );
}
