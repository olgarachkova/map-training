import React from 'react';
import './App.css';
const DG = require('2gis-maps');

interface IMapMainProps {
    center: [number, number],
    zoom: number
}

let map: any;

const MapMain: React.FC<IMapMainProps> = ({ center, zoom, children }) => {

    return (
        <div
            id="map"
            style={{ width: '100%', height: '100%' }}
            ref={(node) => {
                if (node) {
                    if (!map) {
                        map = DG.map('map', {
                            center,
                            zoom
                        });
                        for (let i = 0; i < (children as any).length; i++) {
                            if ((children as any)[i].type.name === 'Marker') {
                                let marker = DG.marker((children as any)[i].props.position).addTo(map);

                                if ((children as any)[i]?.props?.children?.type.name === 'Popup') {
                                    marker.bindPopup((children as any)[i]?.props?.children?.props?.children);
                                }
                            };
                            if ((children as any)[i].type.name === 'Circle') {
                                DG.circle((children as any)[i].props.position, (children as any)[i].props.radius).addTo(map);
                            };
                            if ((children as any)[i].type.name === 'Polygon') {
                                DG.polygon((children as any)[i].props.latlngs).addTo(map);
                            };
                        }
                    }
                }
            }}
        ></div>
    );
}

export default MapMain;