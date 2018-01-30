import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

// .demo0 {
//   border-radius: 4px;
//   background-color: rgb(240, 240, 232);
//   position: relative;
//   margin: 5px 3px 10px;
//   width: 450px;
//   height: 50px;
// }
// .demo0-block {
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   border-radius: 4px;
//   background-color: rgb(130, 181, 198);
// }

const Container = styled.div`
  border-radius: 4px;
  background-color: rgb(240, 240, 232);
  position: relative;
  margin: 5px 3px 10px;
  width: 450px;
  height: 50px;
`;

const Square = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: rgb(130, 181, 198);
`;

class MoveLeftRightExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleMouseDown = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    return (
      <div>
        <button onMouseDown={this.handleMouseDown}>Toggle</button>
        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
          {({ x }) => (
            <Container>
              <Square
                style={{
                  width: `${x}px`
                }}
              />
            </Container>
          )}
        </Motion>
      </div>
    );
  }
}

export default MoveLeftRightExample;
