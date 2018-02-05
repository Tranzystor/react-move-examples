import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styled from 'styled-components';

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimatedItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  background: lightblue;
  overflow: hidden;
`;

const TransitionMotionWrapper = styled.div`
  position: absolute;
`;

const Hook = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background: red;
`;

let counter = 100;

class MoveLeftRightExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { key: 'a', label: 'aa', size: 200 },
        { key: 'b', label: 'bb', size: 200 },
        { key: 'c', label: 'cc', size: 200 }
      ]
    };
  }

  getDefaultStyles = () => {
    const rrr = this.state.items.map(x => {
      return {
        key: x.key,
        style: { minWidth: 0 }
      };
    });
    return rrr;
  };

  getStyles = () => {
    return this.state.items.map(x => {
      return {
        key: x.key,
        style: { minWidth: spring(x.size) }
      };
    });
  };

  changeASize = () => {
    this.setState(prevState => {
      return {
        items: [
          { ...prevState.items[0], size: prevState.items[0].size + 10 },
          { ...prevState.items[1] },
          { ...prevState.items[2] }
        ]
      };
    });
  };

  increaseASizeDecreaseBSize = () => {
    this.setState(prevState => {
      return {
        items: [
          { ...prevState.items[0], size: prevState.items[0].size + 10 },
          { ...prevState.items[1], size: prevState.items[1].size - 10 },
          { ...prevState.items[2] }
        ]
      };
    });
  };

  addItemBefore = () => {
    this.setState(prevState => {
      return {
        items: [{ key: ++counter + '_a', label: 'c-' + counter, size: 200 }, ...prevState.items]
      };
    });
  };

  removeFirstAddEnd = () => {
    const addedAtStart = [{ key: ++counter + '_a', label: 'c-' + counter, size: 200 }, ...this.state.items];
    addedAtStart.pop();
    this.setState({
      items: addedAtStart
    });
  };

  removeFirstItem = () => {
    this.setState(prevState => {
      const [first, ...rest] = prevState.items;
      return {
        items: rest
      };
    });
  };

  willLeave = () => {
    return { minWidth: spring(0) };
  };

  willEnter = () => {
    return {
      minWidth: 0
    };
  };

  render() {
    return (
      <ExampleContainer>
        <button onClick={this.changeASize}>increase A size</button>
        <button onClick={this.increaseASizeDecreaseBSize}>increase A Size Decrease B Size</button>
        <button onClick={this.addItemBefore}>Add item before</button>
        <button onClick={this.removeFirstItem}>Remove first item</button>
        <button onClick={this.removeFirstAddEnd.bind(this)}>Remove first item and add at end.</button>
        <Hook>
          <TransitionMotionWrapper>
            <TransitionMotion
              defaultStyles={this.getDefaultStyles()}
              styles={this.getStyles()}
              willLeave={this.willLeave}
              willEnter={this.willEnter}>
              {interpolatedStyles => (
                <AnimatedItemsContainer>
                  {interpolatedStyles.map(elem => {
                    return (
                      <div key={elem.key} style={{ ...elem.style, border: '1px solid', margin: '1px' }}>
                        {elem.key}
                      </div>
                    );
                  })}
                </AnimatedItemsContainer>
              )}
            </TransitionMotion>
          </TransitionMotionWrapper>
        </Hook>
      </ExampleContainer>
    );
  }
}

export default MoveLeftRightExample;
