import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './App.css';

interface PopupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}

function Popup({ ...props }: PopupProps) {
    return (
        <></>
    );
}

export default Popup;