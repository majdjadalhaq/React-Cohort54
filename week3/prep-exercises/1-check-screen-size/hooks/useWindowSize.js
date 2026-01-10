import { useState, useEffect, useDebugValue } from 'react';

export function useWindowSize(label = 'Window Size') {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useDebugValue(`${label}: ${windowSize.width}x${windowSize.height}`);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
