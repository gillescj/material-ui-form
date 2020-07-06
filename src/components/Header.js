import React, { useContext } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Button,
    makeStyles,
} from '@material-ui/core';
import StoreContext from 'StoreContext';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    pageSelect: {
        justifyContent: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
            marginRight: theme.spacing(5),
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    const { setPage } = useContext(StoreContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Material-UI Form
                </Typography>
                <Container maxWidth="xs">
                    <Grid className={classes.pageSelect} container direction="row">
                        <Grid item sm={2} xs={4}>
                            <Button color="inherit" onClick={() => setPage(1)}>
                                I
                            </Button>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <Button color="inherit" onClick={() => setPage(2)}>
                                II
                            </Button>
                        </Grid>
                        <Grid item sm={2} xs={4}>
                            <Button color="inherit" onClick={() => setPage(3)}>
                                III
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                {/* <Button color="inherit" onClick={() => handleResetClick()}>
                    Reset
                </Button> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
