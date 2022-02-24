import React from 'react';
import './App.css';
import ChildrenExample from './ChildrenExample';
import MapMain from './MapMain';

function App() {
  return (
    <div className="App">
      <MapMain />
      <ChildrenExample>
        <p>I'm children!!!!</p>
      </ChildrenExample>
    </div>
  );
}

export default App;