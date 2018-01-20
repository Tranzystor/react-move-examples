import React, { Component } from "react";
import styled from "styled-components";
import Animate from "react-move/Animate";
import { easeExpInOut } from "d3-ease";

const ListBackground = styled.div``;

const Row = styled.div`
  height: 40px;
  color: black;
`;

class ListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [{ label: "abc" }, { label: "def" }]
    };
  }

  addElement = () => {
    const newElem = { label: "abc" };
    this.setState({
      elements: [...this.state.elements, newElem]
    });
  };

  removeElement = () => {
    const newElements = this.state.elements.filter((x, i) => {
      return i !== 0;
    });
    this.setState({
      elements: [...newElements]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addElement}>Add element</button>
        <button onClick={this.removeElement}>Remove element</button>
        <Animate
          show={true}
          start={{
            height: 0
          }}
          enter={{
            height: [40 * this.state.elements.length],
            timing: { duration: 150, ease: easeExpInOut }
          }}
          update={{
            height: [40 * this.state.elements.length],
            timing: { duration: 150, ease: easeExpInOut }
          }}
          leave={[
            {
              height: [0],
              timing: { duration: 150, ease: easeExpInOut }
            }
          ]}
        >
          {({ height }) => {
            return (
              <div
                style={{
                  width: 200,
                  marginTop: 10,
                  height,
                  background: "red",
                  overflow: "auto",
                  maxHeight: "300px"
                }}
              >
                <ListBackground
                  style={{
                    height: height,
                    background: "green",
                    overflow: "hidden"
                  }}
                >
                  {this.state.elements.map(x => <Row>{x.label}</Row>)}
                </ListBackground>
              </div>
            );
          }}
        </Animate>
      </div>
    );
  }
}

export default ListExample;
