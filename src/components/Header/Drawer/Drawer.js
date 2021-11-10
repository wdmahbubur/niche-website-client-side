import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, MenuItem, MenuList, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import './Drawer.css'
export default function TemporaryDrawer({ toggleDrawer, drawer }) {

    console.log(drawer)
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
                            <Link as={NavLink} to="/"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1
                                }}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link as={NavLink} to="/explore"
                                sx={{
                                    color: '#000000DE',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1
                                }}>Explore</Link>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <Link as={NavLink} to="/explore"
                                sx={{
                                    color: 'error.main',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    ml: 1
                                }}>
                                <Logout sx={{ fontSize: '18px' }} /> Logout
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Box>
            </Drawer>
        </React.Fragment>

    );
}
