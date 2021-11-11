import React, { useState } from 'react';
import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
const Order = () => {
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(quantity * 4000);

    const handleQuantityCount = (value) => {
        if (value === "add") {
            setQuantity(quantity + 1)
            setTotalCost((quantity + 1) * 4000)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
                setTotalCost((quantity - 1) * 4000)
            }
        }
    }

    const handleQuantity = e => {
        e.target.value = quantity;
    }
    const handleCost = e => {
        e.target.value = totalCost;
    }
    return (
        <Box sx={{ my: 10 }}>
            ]<Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <img src="https://i.ibb.co/NjqXqMc/dron-landing-1-copyright.png" alt="" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: 'GrayText' }}>
                                Acer Drone E15
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, color: 'info.main' }}>
                                $4000
                            </Typography>
                            <Typography variant="body2" component="div">
                                Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clearly pretty accurate.The EOS 5D is unlike any previous digital SLR in that it combines a full-frame (35 mm sized) high resolution sensor (12.8 megapixels) with a relatively compact body (slightly larger than the EOS 20D, although in your hand it feels noticeably 'chunkier').The EOS 5D is aimed to slot in between the EOS 20D and the EOS-1D professional digital SLR's, an important difference when compared to the latter is that the EOS 5D doesn't have any environmental seals.While Canon don't specifically refer to the EOS 5D as a 'professional' digital SLR it will have obvious appeal to professionals who want a high quality digital SLR in a body lighter than the EOS-1D. It will also no doubt appeal to current EOS 20D owners (although lets hope they've not bought too many EF-S lenses...)
                            </Typography>
                            <Divider sx={{ my: 3 }} />
                            <Typography gutterBottom variant="body1" component="div">
                                Brand:
                                <Typography variant="body1" sx={{ color: 'info.main', display: 'inline', ml: 1 }}>Drona </Typography>
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                Availability:
                                <Typography variant="body1" sx={{ color: 'info.main', display: 'inline', ml: 1 }}>In Stock </Typography>
                            </Typography>
                            <Typography gutterBottom variant="body1" component="div">
                                SKU:
                                <Typography variant="body1" sx={{ color: 'info.main', display: 'inline', ml: 1 }}>123 </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ mt: 5, }}>
                    <Box sx={{ mb: 2, }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: "info.main", textAlign: 'center' }}>
                            Confirm Order
                        </Typography>
                        <hr style={{ width: '10%', height: 3, backgroundColor: '#5698f5', border: '0px', margin: '0px auto' }} />
                    </Box>
                    <Box sx={{ width: { xs: 1, md: '50%' }, mx: 'auto' }}>
                        <form>
                            <TextField variant="outlined" label="Name" fullWidth required sx={{ my: 2 }} />
                            <TextField variant="outlined" label="Email" fullWidth required sx={{ my: 2 }} />
                            <TextField variant="outlined" label="Phone Number" fullWidth required sx={{ my: 2 }} />
                            <TextField variant="outlined" label="Address" multiline fullWidth required rows={4} sx={{ my: 2 }} />
                            <TextField variant="outlined" label="Product Name" fullWidth required sx={{ my: 2 }} defaultValue="Acer Drone E15" disabled />
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
                                        sx={{ my: 2, width: 80 }} value={quantity} onChange={handleQuantity}
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
                                    sx={{ my: 2 }} value={totalCost} onChange={handleCost}
                                />
                            </Box>


                            <Button variant="contained" type="submit">Confirm Order</Button>
                        </form>
                    </Box>
                </Box >
            </Container >
        </Box >
    );
};

export default Order;