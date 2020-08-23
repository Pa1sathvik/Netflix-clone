import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>IMDBdir
     </h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Trending Now" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
