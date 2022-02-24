import React from 'react';
import './App.css';
const DG = require('2gis-maps');


function MapMain() {
    let map: any;

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
                    }
                }
            }}
        ></div>
    );
}

export default MapMain;