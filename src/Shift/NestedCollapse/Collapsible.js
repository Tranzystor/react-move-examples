import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import ExpandableContent from './ExpandableContent';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCounter: 1
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
      <Collapse
        isOpened={true}
        style={{ marginLeft: '-6px', background: 'azure' }}
        onMeasure={({ height, width }) => console.log('width: ' + width + ' height: ' + height)}
        hasNestedCollapse={false}>
        <button onClick={this.addItem}>add item</button>
        <button onClick={this.removeItem}>remove item</button>
        {itemsToDisplay}
        <ExpandableContent />
      </Collapse>
    );
  }
}

export default Collapsible;
