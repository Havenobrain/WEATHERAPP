import React from 'react';
import Weather from './components/Weather';
import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Прогноз погоды</h1>
            <Weather />
        </div>
    );
}

export default App;
