import './PokemonViewer.css'
import React, { useState } from 'react';
import axios from 'axios';

function PokemonViewer() {
  const [pokemonId, setPokemonId] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Pokemon');
      setLoading(false);
      setPokemonData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(pokemonId);
  };

  const handleSavePokemon = () => {
    const pokemonList = JSON.parse(localStorage.getItem('pokemons')) || [];
    if (!pokemonList.some(pokemon => pokemon.id === pokemonData.id)) {
      pokemonList.push({
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default
      });
      localStorage.setItem('pokemons', JSON.stringify(pokemonList));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonId">Enter Pokemon ID:</label>
        <input
          id="pokemonId"
          type="number"
          value={pokemonId}
          onChange={(e) => setPokemonId(e.target.value)}
        />
        <button type="submit">Fetch Pokemon</button>
        {pokemonData && <button onClick={handleSavePokemon}>Save Pokemon</button>}
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonViewer;
