import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import './App.css';
const DG = require('2gis-maps');

interface MapMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    center: [Number, Number];
    zoom: Number;
}

function MapMain({ center, zoom, children, ...props }: MapMainProps) {
    let map: any;

    return (
        <>
            <div
                id="map"
                style={{ width: '100%', height: '100%' }}
                ref={(node) => {
                    if (node) {
                        if (!map) {
                            map = DG.map('map', {
                                'center': center,
                                'zoom': zoom,
                            });
                            for (let i = 0; i < (children as any).length; i++) {
                                if ((children as any)[i].type.name === 'Marker') {
                                    DG.marker((children as any)[i].props.position).addTo(map);
                                };
                            }
                        }
                    }
                }}
            ></div>
            {children}
        </>
    );
}

export default MapMain;