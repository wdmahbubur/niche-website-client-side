import React, { useEffect, useState } from 'react';
import { Box, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, Snackbar, TableCell } from '@mui/material';
import useAuth from '../../../../../hooks/useAuth';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Loading from '../../../../Loading/Loading';


const MyOrders = ({ setPage }) => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cancelOrder, setCancelOrder] = useState();
    const [dialog, setDialog] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    let count = 1;

    useEffect(() => {
        setPage("My Oder's")

    }, [setPage])

    useEffect(() => {
        setLoading(true);
        axios.get(`https://frozen-chamber-34165.herokuapp.com/orders/${user.uid}`)
            .then(res => setOrders(res.data))
            .finally(() => setLoading(false))
    }, [user.uid, success])

    const confirmDialog = (id) => {
        setCancelOrder(id);
        setDialog(true);
    }
    const confirmCancelOrder = () => {
        setDialog(false);
        setSuccess(false);
        setError(false);
        setLoading(true);
        axios.delete(`https://frozen-chamber-34165.herokuapp.com/orders/${cancelOrder}`)
            .then(res => {
                if (res) {
                    setSuccess(true);
                }
            }).catch(error => {
                setError(true);
            }).finally(() => setLoading(false))

    }
    return (
        < Box >
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
                                <TableCell as={Td}><Button variant="contained" color="error" onClick={() => confirmDialog(order._id)}>Cancel</Button></TableCell>
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
        </Box >
    );
};

export default MyOrders;