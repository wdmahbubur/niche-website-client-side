import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import Loading from '../../../../Loading/Loading';

const AddNewProduct = ({ setPage }) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    async function onSubmit(data) {
        setLoading(true)
        data.date = new Date().toLocaleDateString();
        data.time = new Date().toLocaleTimeString();
        const photo = data.photo[0];
        const title = data.productName;
        console.log(title)
        let body = new FormData();
        body.set('key', process.env.REACT_APP_IMGBB_API_KEY);
        body.append('image', photo);
        body.append('name', title);

        await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        }).then(res => {
            data.photo = res.data.data.display_url;
        });


        axios.post('https://frozen-chamber-34165.herokuapp.com/products', {
            data: data
        }).then(res => {
            if (res) {
                setLoading(false)
                setSuccess(true);
            }
        }).catch(error => {
            if (error) {
                setLoading(false)
                setError(true);
            }
        })
        reset();
    }

    useEffect(() => {
        setPage("Add New Product")
    }, [setPage])


    return (
        <Box>
            <Box sx={{ mb: 2, color: "info.main", textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Add New Product
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField variant="outlined" label="Product Name" fullWidth sx={{ my: 2 }} {...register("productName", { required: true })} />

                    <TextField variant="outlined" label="Brand" fullWidth sx={{ my: 2 }} {...register("brand", { required: true })} />

                    <TextField variant="outlined" label="Description" multiline fullWidth rows={6} sx={{ my: 2 }}  {...register("description", { required: true })} />

                    <TextField variant="outlined" label="Price" sx={{ my: 2 }} {...register("price", { required: true })} />

                    <TextField variant="outlined" type="number" label="Total Product In Stock" sx={{ my: 2, float: 'right' }} {...register("stock", { required: true })} />

                    <TextField type="file" {...register("photo", { required: true })} variant="outlined" sx={{ my: 2 }} label="Product Image" focused />

                    <Button variant="contained" type="submit" sx={{ display: 'block' }}>Add</Button>
                </form>

            </Box>

            {
                success && <Snackbar open={true} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        New Product Added
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
            {
                loading && <Loading />
            }

        </Box>
    );
};

export default AddNewProduct;