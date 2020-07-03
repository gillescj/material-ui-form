import React, { useState } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormAccountInfo from './FormAccountInfo';
import FormLocationInfo from './FormLocationInfo';
import FormConfirmation from './FormConfirmation';

const useStyles = makeStyles((theme) => ({
    pagination: {
        marginTop: theme.spacing(2),
    },
}));

const MainContent = ({ formValues, setFormValues }) => {
    const classes = useStyles();

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

    return (
        <Container maxWidth="xs">
            {renderFormPage()}

            <Grid container spacing={2} className={classes.pagination}>
                <Grid item xs={12} sm={6}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        disabled={page <= 1}
                        onClick={() => setPage((previousPage) => previousPage - 1)}
                    >
                        Previous
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={page >= 3}
                        onClick={() => setPage((previousPage) => previousPage + 1)}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainContent;
