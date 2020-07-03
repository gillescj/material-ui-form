import React from 'react';
import { TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(3),
    },
}));

const FormAccountInfo = ({ formValues, setFormValues }) => {
    const classes = useStyles();

    const handleFieldChange = (event, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: event.target.value });
    };

    return (
        <>
            <Typography className={classes.title} variant="h4">
                Step One
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="First Name"
                            value={formValues.firstName}
                            onChange={(event) => handleFieldChange(event, 'firstName')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Last Name"
                            value={formValues.lastName}
                            onChange={(event) => handleFieldChange(event, 'lastName')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Email Address"
                            value={formValues.email}
                            onChange={(event) => handleFieldChange(event, 'email')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            type="password"
                            required
                            fullWidth
                            label="Password"
                            value={formValues.password}
                            onChange={(event) => handleFieldChange(event, 'password')}
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FormAccountInfo;
