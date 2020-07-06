import React, { useContext } from 'react';
import { TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { countriesObject } from 'utils/countries';
import StoreContext from 'StoreContext';

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

const FormConfirmation = () => {
    const classes = useStyles();
    const { formValues, setFormValues } = useContext(StoreContext);

    const handleFieldChange = (event, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: event.target.value });
    };

    return (
        <>
            <Typography className={classes.title} variant="h4">
                Confirmation
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="First Name"
                            value={formValues.firstName}
                            onChange={(event) => handleFieldChange(event, 'firstName')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Last Name"
                            value={formValues.lastName}
                            onChange={(event) => handleFieldChange(event, 'lastName')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Email Address"
                            value={formValues.email}
                            onChange={(event) => handleFieldChange(event, 'email')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Address"
                            value={formValues.address}
                            onChange={(event) => handleFieldChange(event, 'address')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Country"
                            value={countriesObject[formValues.country].label}
                            onChange={(event) => handleFieldChange(event, 'country')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="City"
                            value={formValues.city}
                            onChange={(event) => handleFieldChange(event, 'city')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Postal Code"
                            value={formValues.postalCode}
                            onChange={(event) => handleFieldChange(event, 'postalCode')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Cell Phone"
                            value={formValues.cellPhone}
                            onChange={(event) => handleFieldChange(event, 'cellPhone')}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Business Phone"
                            value={formValues.businessPhone}
                            onChange={(event) =>
                                handleFieldChange(event, 'businessPhone')
                            }
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FormConfirmation;
