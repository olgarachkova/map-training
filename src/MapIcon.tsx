import React from 'react';
import './App.css';
const DG = require('2gis-maps');


function MapIcon() {
    let myIcon = DG.icon({
        iconUrl: 'pop-up.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });
    //DG.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

    return (
        <></>
    );
}

export default MapIcon;