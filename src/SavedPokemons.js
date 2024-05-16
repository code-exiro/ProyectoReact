import './SavedPokemons.css'
import React, { useState, useEffect } from 'react';

function SavedPokemons() {
  const [savedPokemons, setSavedPokemons] = useState([]);

  useEffect(() => {
    loadSavedPokemons();
  }, []);

  const loadSavedPokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
    setSavedPokemons(pokemons);
  };

  const handleDeletePokemon = (pokemonId) => {
    const updatedPokemons = savedPokemons.filter(pokemon => pokemon.id !== pokemonId);
    localStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
    loadSavedPokemons();  // Recargar la lista de Pokémon guardados
  };

  return (
    <div>
      <h2>Saved Pokemons</h2>
      {savedPokemons.length > 0 ? (
        <ul>
          {savedPokemons.map(pokemon => (
            <li key={pokemon.id}>
              {pokemon.name} (ID: {pokemon.id})
              <img src={pokemon.image} alt={pokemon.name} style={{ width: '50px' }} />
              <button onClick={() => handleDeletePokemon(pokemon.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Pokemons saved.</p>
      )}
    </div>
  );
}

export default SavedPokemons;