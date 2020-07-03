import React, { useState } from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import Header from './Header';
import MainContent from './MainContent';

const App = () => {
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
    return (
        <>
            <CssBaseline />
            <Grid container direction="column">
                <Grid item>
                    <Header formValues={formValues} setFormValues={setFormValues} />
                </Grid>
                <Grid item container>
                    <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <MainContent
                            formValues={formValues}
                            setFormValues={setFormValues}
                        />
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
