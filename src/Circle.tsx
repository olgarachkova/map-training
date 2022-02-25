import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import './App.css';

interface CircleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position: [Number, Number];
    radius: Number;
}

function Circle({ position }: CircleProps) {
    return (
        <></>
    );
}

export default Circle;