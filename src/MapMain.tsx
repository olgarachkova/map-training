import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './App.css';
const DG = require('2gis-maps');

interface MapMainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    center: [Number, Number];
    zoom: Number;
    children?: ReactNode;
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
                        }
                    }
                }}
            ></div>
            {children}
        </>
    );
}

export default MapMain;