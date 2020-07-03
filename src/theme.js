import { createMuiTheme } from '@material-ui/core';
import { pink, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[600],
        },
        secondary: {
            main: purple[500],
        },
    },
});

export default theme;
