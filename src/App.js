import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonViewer from './PokemonViewer';
import GuardarPokemons from './SavedPokemons';

function App() {
  return (
    <Router>
      <h1>
        POKEDEX
      </h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/saved">Pokemons Guardados</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PokemonViewer />} />
          <Route path="/saved" element={<GuardarPokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;