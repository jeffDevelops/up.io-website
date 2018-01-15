import React, { Component } from 'react';
import './App.css';

import { Splashpage }  from './components/Splashpage/Splashpage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav style={ this.navStyles }>
          <img src="upioLogo.jpg"
            style={{ top: '75px', left: '75px', margin: 'auto', width: '4%', minWidth: '90px', height: 'auto'}}
          />
        </nav>
        <Splashpage />
      </div>
    );
  }

  navStyles = { 
    boxSizing: 'border-box',
    position: 'fixed', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    zIndex: '1', 
    top: '0', right: '0', width: '100%', 
    minHeight: '115px', 
    backgroundColor: '#fff',
    boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  }
}

export default App;
