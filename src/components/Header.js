import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import StoreContext from 'StoreContext';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    const { setFormValues } = useContext(StoreContext);

    const handleResetClick = () => {
        setFormValues({
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
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title}>Material-UI Form</Typography>
                <Button color="inherit" onClick={() => handleResetClick()}>
                    Reset
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
