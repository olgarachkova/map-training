import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import './App.css';

interface MarkerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position?: [Number, Number];
}

function Marker({ position }: MarkerProps) {
    return (
        <></>
    );
}

export default Marker;