import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Box = styled.div`
  max-width: 100px;
  width: 100%;
  height: 100px;
  background-color: #4286f4;
  margin: 20px;
  color: #fcfcfc;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
`;

const Boxes = styled.div`
  background-color: #fcfcfc;
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;

  p {
    font-size: 20px;
    line-height: 1.3;
  }
`;

class App extends Component {
  state = {
    view: "home"
  };

  render() {
    return (
      <div className="App">
        <h1>Dylan Dislers</h1>
        {this.state.view === "home" && (
          <Boxes>
            <Box
              onClick={() =>
                this.setState({
                  view: "about"
                })
              }
            >
              {" "}
              About Me{" "}
            </Box>
            <Box> Projects </Box>
            <Box> Contact </Box>
          </Boxes>
        )}

        {this.state.view === "about" && (
          <Boxes>
            <Box
              onClick={() =>
                this.setState({
                  view: "home"
                })
              }
            >
              {" "}
              back{" "}
            </Box>
            <p>
              {" "}
              Hello! I'm Dylan I'm a React developer! I really like building
              things with React. I have strong skills in front end development
              and soon I'll be learning backend.
            </p>
          </Boxes>
        )}
      </div>
    );
  }
}

export default App;
