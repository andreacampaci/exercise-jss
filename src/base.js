import React from "react";
import {render} from "react-dom";
import injectSheet, {jss, ThemeProvider} from "react-jss";
import color from "color";

console.log(jss.version);

const styles = {
    button: {
        fontSize: 16,
        background: 'pink',
        '&:hover': {
            background: 'yellow'
        }
    },
    ctaButton: {
        extend: 'button',
        '&:hover': {
            background: color('red').darken(0.3).hex()
        }
    },
    '@media (min-width: 1024px)': {
        button: {
            width: 200
        }
    }
};

const Comp = ({classes}) => (
    <div>
        <button className={classes.button}>Button</button>
        <button className={classes.ctaButton}>CTA Button</button>
    </div>
);

const StyledComp = injectSheet(styles)(Comp);


const App = () => (
    <StyledComp/>
);

render(<App/>, document.getElementById("root"));
