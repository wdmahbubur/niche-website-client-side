import React, { useEffect } from 'react';

const ManageProducts = ({ setPage }) => {
    useEffect(() => {
        setPage("Manage Products")
    }, [setPage])
    return (
        <div>
            manage products
        </div>
    );
};

export default ManageProducts;