import React, { Component } from 'react';
import './App.css';
import MoveLeftRightExample from './Shift/MoveLeftRightExample';
import CollapseLibExample from './Shift/CollapseLibExample';
import Collapsible from './Shift/NestedCollapse/Collapsible';
import CollapsibleMeasure from './Shift/ReactMeasureWithMotion/CollapsibleMeasure';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MoveLeftRightExample /> */}
        {/* <CollapseLibExample /> */}
        {/* <Collapsible /> */}
        <CollapsibleMeasure />
      </div>
    );
  }
}

export default App;
