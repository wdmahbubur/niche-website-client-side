import React, { useEffect } from 'react';

const Pay = ({ setPage }) => {
    useEffect(() => {
        setPage("Payment")
    }, [setPage])
    return (
        <div>
            <h1>Payment System Coming Soon</h1>
        </div>
    );
};

export default Pay;