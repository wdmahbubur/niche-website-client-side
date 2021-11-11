import { Box, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import React, { useEffect } from 'react';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const ManageAllOrders = ({ setPage }) => {
    useEffect(() => {
        setPage("Manage All Order's")
    }, [setPage])

    let count = 1;
    const cancelOrder = () => {
        const confirm = window.confirm("Are you sure? cancel this order")
    }
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Order Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell colSpan="2">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{count++}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell >{row.fat}</TableCell>
                                <TableCell >{row.carbs}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="success" onClick={cancelOrder}>Approved</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" color="error" onClick={cancelOrder}>Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageAllOrders;