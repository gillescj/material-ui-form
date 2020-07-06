import React, { useContext } from 'react';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
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
    submitButton: {
        marginTop: theme.spacing(2),
    },
}));

const FormConfirmation = () => {
    const classes = useStyles();
    const { formValues, setFormValues } = useContext(StoreContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues, null, 4));
    };

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
        <>
            <Typography className={classes.title} variant="h4">
                Confirmation
            </Typography>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="First Name"
                            value={formValues.firstName}
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
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.submitButton}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={() => handleResetClick()}
                        >
                            Reset
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={9} className={classes.submitButton}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FormConfirmation;
