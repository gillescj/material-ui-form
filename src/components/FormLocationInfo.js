import React, { useState } from 'react';
import { TextField, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { countriesList } from 'utils/countries';

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

const FormLocationInfo = ({ formValues, setFormValues }) => {
    const classes = useStyles();
    const [country, setCountry] = useState(formValues.country);

    const renderedCountryOptions = countriesList.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));

    const handleSelectChange = (event) => {
        setCountry(event.target.value);
        setFormValues({ ...formValues, country: event.target.value });
    };

    const handleFieldChange = (event, fieldName) => {
        setFormValues({ ...formValues, [fieldName]: event.target.value });
    };

    return (
        <>
            <Typography className={classes.title} variant="h4">
                Step Two
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Address"
                            value={formValues.address}
                            onChange={(event) => handleFieldChange(event, 'address')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            select
                            label="Country"
                            value={country}
                            onChange={handleSelectChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your country"
                        >
                            {renderedCountryOptions}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="City"
                            value={formValues.city}
                            onChange={(event) => handleFieldChange(event, 'city')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Postal Code"
                            value={formValues.postalCode}
                            onChange={(event) => handleFieldChange(event, 'postalCode')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Cell Phone"
                            value={formValues.cellPhone}
                            onChange={(event) => handleFieldChange(event, 'cellPhone')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Business Phone"
                            value={formValues.businessPhone}
                            onChange={(event) =>
                                handleFieldChange(event, 'businessPhone')
                            }
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FormLocationInfo;
