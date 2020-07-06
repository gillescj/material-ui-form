import React, { useState } from 'react';
import StoreContext from './StoreContext';

const StoreProvider = (props) => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: 'ca',
        city: '',
        postalCode: '',
        cellPhone: '',
        businessPhone: '',
    });

    const [page, setPage] = useState(1);

    const previousPage = () => {
        setPage((previousPage) => previousPage - 1);
    };

    const nextPage = () => {
        setPage((previousPage) => previousPage + 1);
    };

    const store = {
        formValues,
        setFormValues,
        page,
        setPage,
        previousPage,
        nextPage,
    };

    return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
};

export default StoreProvider;
