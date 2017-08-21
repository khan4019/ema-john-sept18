import React, { Component } from 'react';
import './App.css';

import { Header} from './components/Header/Header';
import { Item } from './components/Items/Item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Item></Item>   
      </div>
    );
  }
}

export default App;
