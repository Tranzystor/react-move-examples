import React, { Component } from 'react';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import DynamicList from './DynamicList';

class CollapsibleMeasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCounter: 1,
      height: 0
    };
  }

  addItem = () => {
    this.setState({
      itemsCounter: ++this.state.itemsCounter
    });
  };

  removeItem = () => {
    this.setState({
      itemsCounter: --this.state.itemsCounter
    });
  };

  render() {
    const itemsToDisplay = [];
    for (let i = 0; i < this.state.itemsCounter; i++) {
      itemsToDisplay.push(
        <div key={i} style={{ height: '40px' }}>
          {i}
        </div>
      );
    }

    return (
      <Motion defaultStyle={{ height: 0 }} style={{ height: spring(this.state.height) }}>
        {interpolatingStyle => (
          <Measure
            bounds
            onResize={contentRect => {
              this.setState({ height: contentRect.bounds.height });
            }}>
            {({ measureRef }) => (
              <div style={{ ...interpolatingStyle, background: 'red' }}>
                <div ref={measureRef}>
                  <button onClick={this.addItem}>add item</button>
                  <button onClick={this.removeItem}>remove item</button>
                  {itemsToDisplay}
                  <DynamicList />
                </div>
              </div>
            )}
          </Measure>
        )}
      </Motion>
    );
  }
}

export default CollapsibleMeasure;
