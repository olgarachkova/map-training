import React from 'react';
import './App.css';
import ChildrenExample from './ChildrenExample';
import MapMain from './MapMain';
import Marker from './Marker';

function App() {
  return (
    <div className="App">
      <MapMain center={[54.98, 82.89]} zoom={13}>
        <Marker />
      </MapMain>
      <ChildrenExample>
        <p>I'm children!!!!</p>
      </ChildrenExample>
    </div>
  );
}

export default App;