import React from 'react';
import './App.css';
import ChildrenExample from './ChildrenExample';
import MapMain from './MapMain';
import Marker from './Marker';

function App() {
  return (
    <div className="App">
      <MapMain center={[54.98, 82.89]} zoom={13}>
        <Marker position={[54.98, 82.89]} />
        <Marker position={[54.97, 82.91]} />
      </MapMain>
    </div>
  );
}

export default App;