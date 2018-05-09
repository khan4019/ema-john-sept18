import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  constructor(){
    super({});
    this.state = {}
  }
  public render() {
    const name: string = 'Front end developer';
    const names: string[] = ['John', 'tom', 'tim', 'kim']
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{name}</p>
        <ul>
          {names.map(user => <li key="user">{user}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
