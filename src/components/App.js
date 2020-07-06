import React, { useState } from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import Header from './Header';
import MainContent from './MainContent';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={false} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <MainContent />
                    </Grid>
                    <Grid item xs={false} sm={2} />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
