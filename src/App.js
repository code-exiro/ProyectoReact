import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonViewer from './PokemonViewer';
import SavedPokemons from './SavedPokemons';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/saved">Saved Pokemons</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PokemonViewer />} />
          <Route path="/saved" element={<SavedPokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;