
import React, { useEffect, useState } from 'react';
import { Box, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, Snackbar, TableCell } from '@mui/material';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Loading from '../../../../Loading/Loading';

const ManageProducts = ({ setPage }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState();
    const [dialog, setDialog] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setPage("Manage Products")
    }, [setPage])

    let count = 1;

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/products`)
            .then(res => setProducts(res.data))
            .finally(() => setLoading(false))
    }, [success])


    const confirmDialog = (id) => {
        setDeleteProduct(id);
        setDialog(true);
    }
    const confirmDeleteOrder = () => {
        setDialog(false);
        setSuccess(false);
        setError(false);
        setLoading(true);
        axios.delete(`http://localhost:5000/products/${deleteProduct}`)
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
                            <TableCell as={Th}>Product</TableCell>
                            <TableCell as={Th}>Brand</TableCell>
                            <TableCell as={Th}>Stock</TableCell>
                            <TableCell as={Th}>Price</TableCell>
                            <TableCell as={Th}>Action</TableCell>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product) => (
                            <Tr key={product._id}>
                                <TableCell as={Td}>{count++}</TableCell>
                                <TableCell as={Td} style={{ fontSize: 16 }}><img src={product.photo} alt="" style={{ width: 40, height: 30, marginRight: 8 }} /> {product.productName}</TableCell>
                                <TableCell as={Td}>{product.brand}</TableCell>
                                <TableCell as={Td}>{product.stock}</TableCell>
                                <TableCell as={Td}>{product.price}</TableCell>
                                <TableCell as={Td}>
                                    <Button variant="contained" color="error" onClick={() => confirmDialog(product._id)}>Delete</Button>
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
                    <Button onClick={confirmDeleteOrder} variant="contained" sx={{ bgcolor: 'error.main' }}>
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

export default ManageProducts;