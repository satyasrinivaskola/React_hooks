import React from 'react'
import { useEffect, useState } from 'react';
const HookMouse=() => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse event");
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log("Component unmounted");
            window.removeEventListener('mousemove', logMousePosition);
            // Cleanup function to remove the event listener
        };
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;