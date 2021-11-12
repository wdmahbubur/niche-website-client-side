
import React, { useEffect, useState } from 'react';
import { Box, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, Snackbar, TableCell } from '@mui/material';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Loading from '../../../../Loading/Loading';

const ManageAllOrders = ({ setPage }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cancelOrder, setCancelOrder] = useState();
    const [dialog, setDialog] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setPage("Manage All Order's")
    }, [setPage])

    let count = 1;

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/orders`)
            .then(res => setOrders(res.data))
            .finally(() => setLoading(false))
    }, [success])

    const approvedOrder = (id) => {
        axios.put(`http://localhost:5000/orders/approved/${id}`)
            .then(res => {
                if (res) {
                    setSuccess(true);
                }
            }).catch(error => {
                setError(true);
            }).finally(() => setLoading(false))
    }

    const confirmDialog = (id) => {
        setCancelOrder(id);
        setDialog(true);
    }
    const confirmCancelOrder = () => {
        setDialog(false);
        setSuccess(false);
        setError(false);
        setLoading(true);
        axios.delete(`http://localhost:5000/orders/${cancelOrder}`)
            .then(res => {
                if (res) {
                    setSuccess(true);
                }
            }).catch(error => {
                setError(true);
            }).finally(() => setLoading(false))

    }
    return (
        <Box>
            {
                loading && <Loading />
            }
            <Paper sx={{ p: 4 }}>
                <Table>
                    <Thead>
                        <Tr>
                            <TableCell as={Th}>#</TableCell>
                            <TableCell as={Th}>Name</TableCell>
                            <TableCell as={Th}>Product</TableCell>
                            <TableCell as={Th}>Order Date</TableCell>
                            <TableCell as={Th}>Total Cost</TableCell>
                            <TableCell as={Th}>Status</TableCell>
                            <TableCell as={Th}>Action</TableCell>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders.map((order) => (
                            <Tr key={order._id}>
                                <TableCell as={Td}>{count++}</TableCell>
                                <TableCell as={Td}>{order.name}</TableCell>
                                <TableCell as={Td}>{order.productName}</TableCell>
                                <TableCell as={Td}>{order.date}</TableCell>
                                <TableCell as={Td}>{order.totalCost}</TableCell>
                                <TableCell as={Td}>{order.status}</TableCell>
                                <TableCell as={Td}>
                                    {
                                        order.status !== "Approved" && <Button variant="contained" color="success" onClick={() => approvedOrder(order._id)} sx={{ mr: 2 }}>Approved</Button>
                                    }

                                    <Button variant="contained" color="error" onClick={() => confirmDialog(order._id)}>Cancel</Button>
                                </TableCell>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Paper>
            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Cancel Order?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure? cancel this order
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialog(false)}>No</Button>
                    <Button onClick={confirmCancelOrder} variant="contained" sx={{ bgcolor: 'error.main' }}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Successfully  Cancel Order
                    </Alert>
                </Snackbar>
            }
            {
                error && <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(false)}>
                    <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                        An error occurred!
                    </Alert>
                </Snackbar>
            }
        </Box>
    );
};

export default ManageAllOrders;