import React, { Component } from "react";
import Animate from "react-move/Animate";
import { easeExpInOut } from "d3-ease";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ShiftExmaple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      color: "#00cf77",
      counter: 0
    };
  }

  updateShow = () => {
    this.setState(prev => ({ show: !prev.show, counter: prev.counter + 1 }));
  };

  updateColor = () => {
    this.setState(() => ({ show: true, color: getRandomColor() }));
  };

  render() {
    const { updateShow, updateColor, state: { show, color, counter } } = this;

    return (
      <div>
        <button onClick={updateShow}>Toggle</button>
        {<button onClick={updateColor}>Update Color</button>}
        <Animate
          show={true}
          start={{
            opacity: 0,
            backgroundColor: color,
            height: 0
          }}
          enter={{
            opacity: [1],
            height: [100],
            timing: { duration: 1000, ease: easeExpInOut }
          }}
          update={{
            opacity: [1],
            height: [10 * counter],
            backgroundColor: [color],
            timing: { duration: 500, ease: easeExpInOut }
          }}
          leave={[
            {
              backgroundColor: ["#ff0063"],
              timing: { duration: 500, ease: easeExpInOut }
            },
            {
              opacity: [0],
              timing: { delay: 500, duration: 500, ease: easeExpInOut }
            },
            {
              height: [0]
            }
          ]}
        >
          {({ opacity, backgroundColor, height }) => {
            return (
              <div
                style={{
                  opacity,
                  width: 200,
                  marginTop: 10,
                  height,
                  color: "white",
                  backgroundColor
                }}
              >
                {opacity.toFixed(3)}
              </div>
            );
          }}
        </Animate>
        <div>next</div>
      </div>
    );
  }
}

export default ShiftExmaple;
