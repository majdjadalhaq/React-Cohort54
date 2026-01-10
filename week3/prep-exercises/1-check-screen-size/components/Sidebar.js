import React from 'react';
import { useScreenSize } from '../hooks/useScreenSize';

export function Sidebar() {
    const screenSize = useScreenSize('Sidebar');

    if (screenSize === 'small') {
        return null;
    }

    const asideStyle = {
        width: '12rem',
        borderRight: '1px solid #e5e7eb',
        padding: '1.5rem',
        backgroundColor: 'white',
        height: '100vh' // ensuring full height for layout
    };

    return (
        <aside style={asideStyle}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827', marginBottom: '1rem' }}>Menu</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#4b5563' }}>
                <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Item 1</li>
                <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Item 2</li>
                <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Item 3</li>
            </ul>
        </aside>
    );
}
