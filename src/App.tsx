import React from 'react';
import './App.css';
import Circle from './Circle';
import MapMain from './MapMain';
import Marker from './Marker';
import Polygon from './Polygon';
import Popup from './Popup';

function App() {
  return (
    <div className="App">
      <MapMain center={[54.98, 82.89]} zoom={13}>
        <Marker position={[54.98, 82.89]}>
          <Popup>Popup here</Popup>
        </Marker>
        <Marker position={[54.97, 82.91]} />
        <Circle position={[55, 83]} radius={400} />
        <Polygon latlngs={[[54.98, 82.89], [54.78, 82.79], [54.88, 82.69]]} />
      </MapMain>
    </div>
  );
}

export default App;