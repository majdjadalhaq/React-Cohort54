import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

export function ScreenSizeDisplay() {
    const windowSize = useWindowSize('Main Display');

    const getCategory = () => {
        if (windowSize.width >= 1024) return { name: 'Large', color: 'green' };
        if (windowSize.width >= 768) return { name: 'Medium', color: 'orange' };
        return { name: 'Small', color: 'blue' };
    };

    const category = getCategory();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 64px)', // Adjust for nav height
            backgroundColor: 'white',
            width: '100%'
        }}>
            <div style={{ textAlign: 'center' }}>

                <h1 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#9ca3af', marginBottom: '2rem' }}>Screen Size</h1>

                <div style={{ fontSize: '6rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                    {windowSize.width} × {windowSize.height}
                </div>

                <div style={{ fontSize: '2.25rem', fontWeight: 500, color: category.color }}>
                    {category.name}
                </div>

            </div>
        </div>
    );
}
