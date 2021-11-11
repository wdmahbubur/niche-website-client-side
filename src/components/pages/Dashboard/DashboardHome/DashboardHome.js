import { Box, Typography, Paper, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PendingIcon from '@mui/icons-material/Pending';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { DataGrid } from '@mui/x-data-grid';
import Calender from '../../../Calender/Calender';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const DashboardHome = ({ setPage }) => {
    const today = new Date();
    const [date, setDate] = React.useState(today);

    useEffect(() => {
        setPage("Dashboard")
    }, [setPage])
    return (
        <Box>
            <Box sx={{ textAlign: 'center', color: 'GrayText' }}>
                <Typography variant="h5">
                    Welcome Mahbubur Rahman!
                </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 5 }}>
                            <ShoppingCartIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box >
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    34
                                </Typography>
                                <Typography variant="body2">
                                    Total Pending
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ boxShadow: 3, width: 1, display: 'flex', alignItems: 'center', px: 3, py: 2, borderRadius: 5 }}>
                            <PendingIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                    34
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
                                    34
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

                            <div style={{ height: 400, width: '100%', marginTop: 8 }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default DashboardHome;