import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AddNewProduct = ({ setPage }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        setPage("Add New Product")
    }, [setPage])

    const getData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    }

    const addProduct = e => {
        e.preventDefault();
    }
    console.log(data)
    return (
        <Box>
            <Box sx={{ mb: 2, color: "info.main", textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Add New Product
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                <form onSubmit={addProduct}>
                    <TextField variant="outlined" label="Product Name" fullWidth sx={{ my: 2 }} name="productName" onChange={getData} />
                    <TextField variant="outlined" label="Brand" fullWidth sx={{ my: 2 }} name="brand" onChange={getData} />
                    <TextField variant="outlined" label="Description" multiline fullWidth rows={4} sx={{ my: 2 }} name="description" onChange={getData} />
                    <TextField variant="outlined" label="Price" sx={{ my: 2 }} name="price" onChange={getData} />
                    <TextField variant="outlined" type="number" label="Total Product In Stock" sx={{ my: 2, float: 'right' }} name="stock" onChange={getData} />
                    <TextField variant="outlined" type="file" label="Product Image" focused sx={{ my: 2 }} name="photo" onChange={getData} />


                    <Button variant="contained" type="submit" sx={{ display: 'block' }}>Add</Button>
                </form>
            </Box>
        </Box>
    );
};

export default AddNewProduct;