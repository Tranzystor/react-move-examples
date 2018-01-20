import React, { Component } from "react";
import styled from "styled-components";
import { Collapse } from "react-collapse";

const ListBackground = styled.div`
  background: azure;
`;

const Row = styled.div`
  height: 40px;
  color: black;
  background: lightblue;
  margin: 10px;
  margin-bottom: 20px;
`;

class CollaseLibexample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [{ label: "react-collapse" }]
    };
  }

  addElement = () => {
    const newElem = { label: "react-collapse" };
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
        <div style={{ position: "relative" }}>
          <Collapse
            isOpened={true}
            style={{
              background: "azure",
              position: "absolute"
            }}
          >
            <ListBackground
              style={{
                maxHeight: "300px",
                overflow: "auto"
              }}
            >
              {this.state.elements.map(x => <Row>{x.label}</Row>)}
            </ListBackground>
          </Collapse>
        </div>
        <div>the next</div>
      </div>
    );
  }
}

export default CollaseLibexample;
