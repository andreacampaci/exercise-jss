import React from "react";
import { render } from "react-dom";
import injectSheet, { jss, ThemeProvider } from "react-jss";
import {theme} from "./themes/theme-alpha";
// import {theme} from "./themes/theme-beta";

console.log(jss.version);

const styles = theme => ({
    wrapper: {
        padding: 40,
        background: theme.background,
        textAlign: "left"
    },
    title: {
        font: {
            size: 40,
            weight: 900
        },
        color: theme.color
    },
    link: {
        color: theme.color,
        "&:hover": {
            opacity: 0.5
        }
    }
});

const Comp = ({ classes }) => (
    <div className={classes.wrapper}>
        <h1 className={classes.title}>Hello React-JSS!</h1>
        <a
            className={classes.link}
            href="http://cssinjs.org/react-jss"
            traget="_blank"
        >
            See docs
        </a>
    </div>
);

const StyledComp = injectSheet(styles)(Comp);


const App = () => (
        <ThemeProvider theme={theme}>
            <StyledComp />
        </ThemeProvider>
);

render(<App />, document.getElementById("root"));
