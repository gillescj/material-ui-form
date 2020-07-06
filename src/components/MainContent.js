import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import FormAccountInfo from './FormAccountInfo';
import FormLocationInfo from './FormLocationInfo';
import FormConfirmation from './FormConfirmation';
import Pagination from './Pagination';
import StoreContext from 'StoreContext';

const MainContent = () => {
    const { page } = useContext(StoreContext);

    const renderFormPage = () => {
        switch (page) {
            case 1:
                return <FormAccountInfo />;
            case 2:
                return <FormLocationInfo />;
            case 3:
                return <FormConfirmation />;
            default:
                return 'Error';
        }
    };

    return (
        <Container maxWidth="xs">
            {renderFormPage()}
            <Pagination />
        </Container>
    );
};

export default MainContent;
