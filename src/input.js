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
    <h1 className={classes.title}>Hello CSS in JS!</h1>
    <a
      className={classes.link}
      href="http://cssinjs.org"
      target="_blank"
    >
      See docs
    </a>
  </div>
);

const StyledComp = injectSheet(styles)(Comp);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme : {
        background: "#f7df1e",
        color: "#24292e",
      },
    }
  }

  onColorInput = (event) => {
    this.setState({theme: {...this.state.theme, color: event.target.value}})
  }

  onBackgroundInput = (event) => {
    this.setState({theme: {...this.state.theme, background: event.target.value}})
  }

  render() {
    return (
    <div>
      <ThemeProvider theme={this.state.theme}>
        <StyledComp />
      </ThemeProvider>
      <label>Background: <input type="text" value={this.state.theme.background} onChange={this.onBackgroundInput} /></label>
      <label>Color: <input type="text" value={this.state.theme.color} onChange={this.onColorInput} /></label>
    </div>
  )}
}

render(<App />, document.getElementById("root"));
