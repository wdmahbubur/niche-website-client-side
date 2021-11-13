import React, { useEffect, useState } from 'react';
import { Box, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Alert, Snackbar, TableCell, TableContainer } from '@mui/material';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import axios from 'axios';
import Loading from '../../../../Loading/Loading';

const MakeNewAdmin = ({ setPage }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [admin, setAdmin] = useState();
    const [dialog, setDialog] = useState(false);

    useEffect(() => {
        setPage("Add New Admin")
    }, [setPage])

    useEffect(() => {
        setLoading(true);
        axios.get('https://frozen-chamber-34165.herokuapp.com/users')
            .then(res => {
                if (res.data) {
                    setUsers(res.data);
                }
            }).finally(() => setLoading(false));
    }, [success])

    let count = 1;

    const confirmDialog = (id) => {
        setAdmin(id);
        setDialog(true);
    }
    const confirmAdmin = () => {
        setDialog(false);
        setSuccess(false);
        setError(false);
        setLoading(true);
        axios.put(`https://frozen-chamber-34165.herokuapp.com/users/admin/${admin}`)
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
            <TableContainer component={Paper}>
                <Table>
                    <Thead>
                        <Tr >
                            <TableCell as={Th}>#</TableCell>
                            <TableCell as={Th}>Name</TableCell>
                            <TableCell as={Th}>Email</TableCell>
                            <TableCell as={Th}>Role</TableCell>
                            <TableCell as={Th}>Make Admin</TableCell>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user) => (
                            <Tr key={user._id}>
                                <TableCell as={Td}>{count++}</TableCell>
                                <TableCell as={Td} >{user.name}</TableCell>
                                <TableCell as={Td}>{user.email}</TableCell>
                                <TableCell as={Td} >{user.role}</TableCell>
                                <TableCell>
                                    {
                                        user.role !== "admin" && < Button variant="contained" color="success" onClick={() => confirmDialog(user._id)}>Make Admin</Button>
                                    }

                                </TableCell>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
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
                        Are you sure? make this admin
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialog(false)}>No</Button>
                    <Button onClick={confirmAdmin} variant="contained" sx={{ bgcolor: 'error.main' }}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Successfully Make New Admin
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

export default MakeNewAdmin;