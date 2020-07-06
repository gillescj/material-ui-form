import React, { useState } from 'react';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { countriesList } from 'utils/countries';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

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

const schema = yup.object().shape({
    address: yup.string().label('Address'),
    city: yup.string().label('City').required(),
    postalCode: yup.string().label('Postal Code').required(),
    cellPhone: yup
        .string()
        .label('Cell Phone Number')
        .required()
        .matches(/(.*\d){10,}/, 'Phone numbers must contain at least 10 number digits'),
    businessPhone: yup.lazy((value) => {
        if (value === '') {
            return yup.string().label('Business Phone Number');
        }
        return yup
            .string()
            .label('Business Phone Number')
            .matches(
                /(.*\d){10,}/,
                'Phone numbers must contain at least 10 number digits'
            );
    }),
});

const FormLocationInfo = ({ formValues, setFormValues }) => {
    const classes = useStyles();

    const [country, setCountry] = useState(formValues.country);
    const { register, handleSubmit, errors } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    });

    const renderedCountryOptions = countriesList.map((option) => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));

    const handleSelectChange = (event) => {
        setCountry(event.target.value);
        setFormValues({ ...formValues, country: event.target.value });
    };

    const onSubmit = (formData) => {
        setFormValues((previousFormValues) => {
            return { ...previousFormValues, ...formData };
        });
    };

    return (
        <>
            <Typography className={classes.title} variant="h4">
                Step Two
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Address"
                            name="address"
                            inputRef={register}
                            error={!errors.address ? false : true}
                            helperText={errors.address && errors.address.message}
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
                            name="city"
                            inputRef={register}
                            error={!errors.city ? false : true}
                            helperText={errors.city && errors.city.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Postal Code"
                            name="postalCode"
                            inputRef={register}
                            error={!errors.postalCode ? false : true}
                            helperText={errors.postalCode && errors.postalCode.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Cell Phone"
                            name="cellPhone"
                            inputRef={register}
                            error={!errors.cellPhone ? false : true}
                            helperText={errors.cellPhone && errors.cellPhone.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Business Phone"
                            name="businessPhone"
                            inputRef={register}
                            error={!errors.businessPhone ? false : true}
                            helperText={
                                errors.businessPhone && errors.businessPhone.message
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
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

export default FormLocationInfo;
