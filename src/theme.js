import React from "react";
import { render } from "react-dom";
import injectSheet, { jss, ThemeProvider } from "react-jss";

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

const theme = {
    background: "#f7df1e",
    color: "#24292e"
};


const App = () => (
    <div>
        <input type="text" onInput={}/>
        <ThemeProvider theme={theme}>
            <StyledComp />
        </ThemeProvider>
    </div>
);

render(<App />, document.getElementById("root"));
