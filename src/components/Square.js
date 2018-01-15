import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);

    this._setColorChangeInterval = this._setColorChangeInterval.bind(this);

    this.state = {
      color: 1, 
      interval: 1000
    }
  }

  componentDidMount() {
    let randomColor = Math.ceil(Math.random() * 10);
    let randomInterval = (Math.ceil(Math.random() * 3)) * 1000;

    this.setState((prevState, props) => {
      return {
        interval: randomInterval,
        color: randomColor
      }
    }, () => {
      this._setColorChangeInterval(this.state.interval);
    });
  }

  _setColorChangeInterval(interval) {
    let newRandomColor = Math.ceil(Math.random() * 10);
    let newRandomInterval = (Math.ceil(Math.random() * 3)) * 1000;

    let colorChangeTimeout = setTimeout(() => {
      this.setState((prevState) => {
        return {
          color: newRandomColor,
          interval: newRandomInterval
        }
      }, () => {
        clearInterval(colorChangeTimeout);
        this._setColorChangeInterval(newRandomInterval);
      });
    }, interval);
  }

  render() {

    const alpha = 1;

    const pallette = {
      1: `rgba(240, 240, 240, ${alpha})`,
      2: `rgba(245, 245, 245, ${alpha})`,
      3: `rgba(235, 235, 235, ${alpha})`,
      4: `rgba(225, 225, 225, ${alpha})`,
      5: `rgba(220, 220, 220, ${alpha})`,

      6: `rgba(215, 215, 215, ${alpha})`,
      7: `rgba(255, 33, 81, ${alpha})`,
      8: `rgba(255, 244, 59, ${alpha})`,
      9: `rgba(6, 150, 204, ${alpha})`,
      10: `rgba(230, 230, 230, ${alpha})`
    }

    let color = pallette[this.state.color];

    return(
      <div
        style={{ position: 'relative', zIndex: '-1', backgroundColor: color, width: '2%', height: '2%', paddingBottom: '2%' }}
      >
      </div>
    );
  }
}

export default Square;