import React from 'react';
import './App.css';
import QuizComponent from './components/QuizComponent';
import HomeComponent from './components/HomeComponent';
import ResultComponent from './components/ResultComponent';

function App() {
    return (
        <div className="App">
            <HomeComponent />
            <QuizComponent />
            <ResultComponent />
        </div>
    );
}

export default App;