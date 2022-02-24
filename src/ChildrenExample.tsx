import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import './App.css';

interface ChildrenExampleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}


function ChildrenExample({ ...props }: ChildrenExampleProps) {
    return (
        <div className='childrenExample'>
            <p>Children here:</p>
            {props.children}
        </div>
    );
}

export default ChildrenExample;