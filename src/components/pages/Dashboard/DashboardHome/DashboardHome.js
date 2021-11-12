import { Box, Typography, Paper, Grid, TableCell } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Calender from '../../../Calender/Calender';
import useAuth from '../../../../hooks/useAuth'
import axios from 'axios';
import Loading from '../../../Loading/Loading';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const DashboardHome = ({ setPage }) => {
    const today = new Date();
    const [date, setDate] = useState(today);
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    let count = 1;

    useEffect(() => {
        setPage("Dashboard");
    }, [setPage]);

    useEffect(() => {
        setLoading(true);
        if (user.role === "admin") {
            axios.get(`http://localhost:5000/orders`)
                .then(res => setOrders(res.data))
                .finally(() => setLoading(false))
        } else {
            axios.get(`http://localhost:5000/orders/${user.uid}`)
                .then(res => setOrders(res.data))
                .finally(() => setLoading(false))
        }
    }, [user.uid, user.role])

    return (
        <Box>
            <Box sx={{ textAlign: 'center', color: 'GrayText' }}>
                <Typography variant="h5">
                    Welcome {user.displayName}!
                </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 5 }}>
                            <ShoppingCartIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box >
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    {orders.length}
                                </Typography>
                                <Typography variant="body2">
                                    Total Order
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 5 }}>
                            <PendingIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>

                                    {orders.filter(order => order.status === "Pending").length}
                                </Typography>
                                <Typography variant="body2">
                                    Pending Order
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 5 }}>
                            <AssignmentTurnedInIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    {orders.filter(order => order.status === "Approved").length}
                                </Typography>
                                <Typography variant="body2">
                                    Approved Order
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, borderRadius: 5, p: { xs: 1, md: 3 } }}>

                            {
                                date.toLocaleDateString() === today.toLocaleDateString() ? "Today's " : date.toLocaleDateString()
                            }
                            {` Order`}


                            <Table>
                                <Thead>
                                    <Tr>
                                        <TableCell as={Th}>#</TableCell>
                                        <TableCell as={Th}>Name</TableCell>
                                        <TableCell as={Th}>Product</TableCell>
                                        <TableCell as={Th}>Total Cost</TableCell>
                                        <TableCell as={Th}>Status</TableCell>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {orders.filter(order => order.date === date.toLocaleDateString()).map((order) => (
                                        <Tr key={order._id}>
                                            <TableCell as={Td} >{count++}</TableCell>
                                            <TableCell as={Td} >{order.name}</TableCell>
                                            <TableCell as={Td} >{order.productName}</TableCell>
                                            <TableCell as={Td}  >{order.totalCost}</TableCell>
                                            <TableCell as={Td} >{order.status}</TableCell>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>

                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                </Grid>
            </Box>
            {
                loading && <Loading />
            }
        </Box >
    );
};

export default DashboardHome;