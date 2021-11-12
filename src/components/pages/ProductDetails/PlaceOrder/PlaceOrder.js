import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router';

const PlaceOrder = ({ productName, price, setLoading }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        setTotalCost(quantity * price);
    }, [quantity, price, navigate, success]);

    const handleQuantityCount = (value) => {
        if (value === "add") {
            setQuantity(quantity + 1)
            setTotalCost((quantity + 1) * price)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
                setTotalCost((quantity - 1) * price)
            }
        }
    }
    const handleQuantity = e => {
        e.target.value = quantity;
    }
    const handleCost = e => {
        e.target.value = totalCost;
    }


    async function onSubmit(data) {
        setLoading(true);
        data.productName = productName;
        data.totalCost = totalCost;
        data.status = "Pending";
        data.uid = user.uid;
        data.date = new Date().toLocaleDateString();

        await axios.post('http://localhost:5000/orders', {
            data: data
        }).then(res => {
            if (res) {
                setSuccess(true);
                reset();
            }
        }).catch(error => {
            setError(true);
        })
            .finally(() => setLoading(false));
    }
    return (
        <Box sx={{ mt: 5, }}>
            <Box sx={{ mb: 2, }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: "info.main", textAlign: 'center' }}>
                    Place Order
                </Typography>
                <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
            </Box>
            <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField variant="outlined" label="Name" fullWidth required sx={{ my: 2 }} {...register("name")} defaultValue={user.displayName} />

                    <TextField variant="outlined" label="Email" fullWidth required sx={{ my: 2 }} {...register("email")} defaultValue={user.email} />

                    <TextField variant="outlined" label="Phone Number" fullWidth required sx={{ my: 2 }} {...register("phone")} />

                    <TextField variant="outlined" label="Address" multiline fullWidth required rows={4} sx={{ my: 2 }}  {...register("address")} />

                    <Typography variant="h6">
                        Product Name: {productName}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                            <Button variant="outlined"
                                sx={{
                                    mr: 1,
                                    ":hover": {
                                        backgroundColor: 'info.main',
                                        color: '#fff'
                                    }
                                }}
                                onClick={() => handleQuantityCount("Sub")}
                            >-</Button>

                            <TextField variant="outlined" label="Quantity" size="small" required
                                sx={{ my: 2, width: 80 }} value={quantity} onChange={handleQuantity} {...register("quantity")}
                            />

                            <Button variant="outlined" sx={{
                                ml: 1,
                                ":hover": {
                                    backgroundColor: 'info.main',
                                    color: '#fff'
                                }
                            }}
                                onClick={() => handleQuantityCount("add")}
                            >+</Button>
                        </Box>
                        <TextField variant="outlined" label="Total Cost" size="small" required
                            sx={{ my: 2 }} value={totalCost + ''} disabled onChange={handleCost} {...register("totalCost")}
                        />
                    </Box>
                    <Button variant="contained" type="submit">Confirm Order</Button>
                </form>
            </Box>
            {
                success && <Dialog
                    open={true}
                    onClose={() => setSuccess(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Order Success. Thank you
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => navigate('/dashboard', { replace: true })} variant="contained">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>

            }
            {
                error && <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(false)}>
                    <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                        Your Orders Failed!
                    </Alert>
                </Snackbar>
            }
        </Box >
    );
};

export default PlaceOrder;