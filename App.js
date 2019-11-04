import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div>
      <a>Home</a>
      <a>News</a>
      <a>Messages</a>
    </div>
  );
}

const Body = () => {
  return (
    <div className="App">
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
      </ul>
    </div>
  );
}

export default App;
