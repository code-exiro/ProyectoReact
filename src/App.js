import './App.css';
import React from 'react';
import PokemonViewer from './PokemonViewer';
import SavedPokemons from './SavedPokemons';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Viewer</h1>
      <PokemonViewer />
      <SavedPokemons />
    </div>
  );
}

export default App;
