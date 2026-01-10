import React from 'react';
import { useScreenSize } from '../hooks/useScreenSize';

export function Navigation() {
    const screenSize = useScreenSize('Navigation');

    // Inline styles to mimic the tailwind classes somewhat, for better visibility without tailwind
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb'
    };

    const linkStyle = {
        marginRight: '2rem',
        color: '#4b5563',
        textDecoration: 'none'
    };

    return (
        <nav style={navStyle}>
            <div style={{ fontSize: '1.125rem', fontWeight: 500, color: '#111827' }}>
                App Daria
            </div>
            {screenSize !== 'small' ? (
                <div style={{ display: 'flex' }}>
                    <a href="#" style={linkStyle}>Home</a>
                    <a href="#" style={linkStyle}>About</a>
                    <a href="#" style={linkStyle}>Contact</a>
                </div>
            ) : (
                <button style={{ color: '#4b5563', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Menu
                </button>
            )}
        </nav>
    );
}
