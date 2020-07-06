import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import FormAccountInfo from './FormAccountInfo';
import FormLocationInfo from './FormLocationInfo';
import FormConfirmation from './FormConfirmation';
import Pagination from './Pagination';

const MainContent = ({ formValues, setFormValues }) => {
    const [page, setPage] = useState(1);

    const renderFormPage = () => {
        switch (page) {
            case 1:
                return (
                    <FormAccountInfo
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />
                );
            case 2:
                return (
                    <FormLocationInfo
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />
                );
            case 3:
                return (
                    <FormConfirmation
                        formValues={formValues}
                        setFormValues={setFormValues}
                    />
                );
            default:
                return 'Error';
        }
    };

    const previousPage = () => {
        setPage((previousPage) => previousPage - 1);
    };

    const nextPage = () => {
        setPage((previousPage) => previousPage + 1);
    };

    return (
        <Container maxWidth="xs">
            {renderFormPage()}
            <Pagination page={page} previousPage={previousPage} nextPage={nextPage} />
        </Container>
    );
};

export default MainContent;
