import React, { Component } from 'react';

class ExpandableContent extends Component {
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
      <div>
        <button onClick={this.addItem}>add item</button>
        <button onClick={this.removeItem}>remove item</button>
        {itemsToDisplay}
      </div>
    );
  }
}

export default ExpandableContent;
