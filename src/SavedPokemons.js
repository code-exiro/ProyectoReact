import './SavedPokemons.css'
import React, { useState, useEffect } from 'react';

function GuardarPokemons() {
  const [guardarPokemons, pokeGuardados] = useState([]);

  useEffect(() => {
    mostrarPokeGuardados();
  }, []);

  const mostrarPokeGuardados = () => {
    const pokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
    pokeGuardados(pokemons);
  };

  const encargoBorraPoke = (pokemonId) => {
    const actualizarPoke = guardarPokemons.filter(pokemon => pokemon.id !== pokemonId);
    localStorage.setItem('pokemons', JSON.stringify(actualizarPoke));
    mostrarPokeGuardados();  // Recargar la lista de Pokémon guardados
  };

  return (
    <div>
      <h2>Pokemons guardados</h2>
      {guardarPokemons.length > 0 ? (
        <ul>
          {guardarPokemons.map(pokemon => (
            <li key={pokemon.id}>
              {pokemon.name} (ID: {pokemon.id})
              <img src={pokemon.image} alt={pokemon.name} style={{ width: '50px' }} />
              <button onClick={() => encargoBorraPoke(pokemon.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay pokemones guardados.</p>
      )}
    </div>
  );
}

export default GuardarPokemons;