import { createMuiTheme } from '@material-ui/core';
import { pink, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[500],
        },
        secondary: {
            main: purple[300],
        },
    },
});

export default theme;
