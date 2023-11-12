import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSearchParams } from 'react-router-dom';



function App() {
    const [searchParams] = useSearchParams()
    const id=searchParams.get("id")
    return (
        <div className="App">
            <header className="App-header">
                <div className='block'><p>Bombagen!       Bombagen!       Bombagen!       Bombagen!       Bombagen!</p></div>
            </header>
        </div>
    );
}

export default App;
