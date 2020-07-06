import React from 'react';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    firstName: yup.string().label('First Name').required().max(30),
    lastName: yup.string().label('Last Name').max(30),
    email: yup.string().label('Email Address').required().email(),
    password: yup
        .string()
        .label('Password')
        .required()
        .min(8)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])/,
            'Password must contain capital and lowercase letters'
        )
        .matches(/^(?=.*\d)/, 'Password must contain at least one number')
        .matches(/^(?=.*\W)/, 'Password must contain at least one special character'),
});

const FormAccountInfo = ({ formValues, setFormValues }) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm({
        mode: 'all',
        defaultValues: {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            password: formValues.password,
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData) => {
        setFormValues((previousFormValues) => {
            return { ...previousFormValues, ...formData };
        });
    };

    return (
        <>
            <Typography className={classes.title} variant="h4">
                Step One
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="First Name"
                            name="firstName"
                            inputRef={register}
                            error={!errors.firstName ? false : true}
                            helperText={errors.firstName && errors.firstName.message}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="filled"
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            inputRef={register}
                            error={!errors.lastName ? false : true}
                            helperText={errors.lastName && errors.lastName.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            inputRef={register}
                            error={!errors.email ? false : true}
                            helperText={errors.email && errors.email.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="filled"
                            type="password"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            inputRef={register}
                            error={!errors.password ? false : true}
                            helperText={errors.password && errors.password.message}
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

export default FormAccountInfo;
