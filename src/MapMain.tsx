import React from 'react';
import './App.css';
const DG = require('2gis-maps');


function MapMain() {
    let map: any;

    let myIcon = DG.icon({
        iconUrl: './pop-up.png',
        iconSize: [20, 20],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });


    return (
        <div
            id="map"
            style={{ width: '100%', height: '100%' }}
            ref={(node) => {
                if (node) {
                    if (!map) {
                        map = DG.map('map', {
                            'center': [54.98, 82.89],
                            'zoom': 13
                        });
                        DG.marker([54.98, 82.89], { icon: myIcon }).addTo(map);
                    }
                }
            }}
        ></div>
    );
}

export default MapMain;