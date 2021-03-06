import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Link, Tooltip } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAuth from '../../../hooks/useAuth'
import StoreIcon from '@mui/icons-material/Store';

const drawerWidth = 240;

function Dashboard(props) {
    const { window, page } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    <Link as={NavLink} to="/" sx={{ color: '#757575', textDecoration: 'none' }}>
                        DroneBazar
                    </Link>
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button as={NavLink} to="" sx={{ color: 'GrayText' }}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                {
                    user.role === "user" ? <>
                        <ListItem button as={NavLink} to="/explore" sx={{ color: 'GrayText' }}>
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText primary="Explore" />
                        </ListItem>
                        <ListItem button as={NavLink} to="my-orders" sx={{ color: 'GrayText' }}>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>

                        <ListItem button as={NavLink} to="pay" sx={{ color: 'GrayText' }}>
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pay" />
                        </ListItem>

                        <ListItem button as={NavLink} to="review" sx={{ color: 'GrayText' }}>
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary="Review" />
                        </ListItem>
                    </>
                        :
                        <>
                            <ListItem button as={NavLink} to="manage-all-orders" sx={{ color: 'GrayText' }}>
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage All Order" />
                            </ListItem>

                            <ListItem button as={NavLink} to="manage-products" sx={{ color: 'GrayText' }}>
                                <ListItemIcon>
                                    <LocalMallIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>

                            <ListItem button as={NavLink} to="add-new-products" sx={{ color: 'GrayText' }}>
                                <ListItemIcon>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add New Product" />
                            </ListItem>

                            <ListItem button as={NavLink} to="make-new-admin" sx={{ color: 'GrayText' }}>
                                <ListItemIcon>
                                    <SupervisedUserCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Make New Admin" />
                            </ListItem>
                        </>
                }

            </List>

            <Divider />
            <List>
                <ListItem button onClick={logout}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color: 'error.main' }} />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {page}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Tooltip title={user.displayName} >
                            <IconButton size="small" sx={{ ml: 2, color: '#fff' }}>
                                <Avatar sx={{ width: 32, height: 32, mr: 1 }}><img src={user.photoURL || 'https://i.ibb.co/rFcCHMw/test.jpg'} alt="" style={{ width: '100%' }} /></Avatar>

                                {user.displayName}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
