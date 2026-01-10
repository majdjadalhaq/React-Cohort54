import React from 'react';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { ScreenSizeDisplay } from './components/ScreenSizeDisplay';

function App() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Navigation />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main style={{ flex: 1 }}>
                    <ScreenSizeDisplay />
                </main>
            </div>
        </div>
    );
}

export default App;
