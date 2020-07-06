import React, { useContext } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StoreContext from 'StoreContext';

const useStyles = makeStyles((theme) => ({
    pagination: {
        marginTop: theme.spacing(2),
    },
}));

const Pagination = () => {
    const classes = useStyles();

    const { page, previousPage, nextPage } = useContext(StoreContext);

    return (
        <Grid container spacing={2} className={classes.pagination}>
            <Grid item xs={12} sm={4}>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    disabled={page <= 1}
                    onClick={() => previousPage()}
                >
                    Previous
                </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={page >= 3}
                    onClick={() => nextPage()}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    );
};

export default Pagination;
