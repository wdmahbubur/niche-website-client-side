import React, { useEffect } from 'react';
import { Box, Paper, Grid, Button } from '@mui/material';
import Calender from '../../../../Calender/Calender';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

const MyOrders = ({ setPage }) => {
    const today = new Date();
    const [date, setDate] = React.useState(today);
    useEffect(() => {
        setPage("My Oder's")
    }, [setPage])

    let count = 1;
    const cancelOrder = () => {
        const confirm = window.confirm("Are you sure? cancel this order")
    }
    return (
        < Box >
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={0} sx={{ boxShadow: 3, width: 1, borderRadius: 5, p: { xs: 1, md: 3 } }}>

                        {
                            date.toLocaleDateString() === today.toLocaleDateString() ? "Today's " : date.toLocaleDateString()
                        }
                        {` Order`}

                        <div style={{ height: 400, width: '100%', marginTop: 8 }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>#</TableCell>
                                            <TableCell>Full Name</TableCell>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>Order Date</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Action</TableCell>
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
                                                <TableCell><Button variant="contained" color="error" onClick={cancelOrder}>Cancel</Button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Calender date={date} setDate={setDate} />
                </Grid>
            </Grid>
        </Box >
    );
};

export default MyOrders;