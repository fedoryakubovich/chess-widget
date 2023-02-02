import React from 'react';
import './chess';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <chess-widget />

      <chess-widget username="magnuscarlsen" />
    </div>
  );
};

export default App;
