import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = ({ setFormValues }) => {
    const classes = useStyles();

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
