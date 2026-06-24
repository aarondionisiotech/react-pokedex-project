import { useState } from "react";

// Carta che mostra le informazioni di un Pokémon
function PokeCard({ pokemon, imageMode }) {

  // Serve per decidere se mostrare il Pokémon normale o shiny
  const [shiny, setShiny] = useState(false);

  // Prendiamo il primo tipo del Pokémon
  const type = pokemon.types[0].type.name;

  // Controlla a quale generazione appartiene il Pokémon
  function getGeneration(id) {
    if (id <= 151) return "Gen 1";
    if (id <= 251) return "Gen 2";
    if (id <= 386) return "Gen 3";
    if (id <= 493) return "Gen 4";
    return "Other";
  }

  const imageSrc =
  imageMode === "artwork"
    ? (
        shiny
          ? pokemon.sprites.other["official-artwork"].front_shiny
          : pokemon.sprites.other["official-artwork"].front_default
      )
    : (
        shiny
          ? pokemon.sprites.front_shiny
          : pokemon.sprites.front_default
      );

  return (
    // La classe cambia in base al tipo del Pokémon
    <div className={`card ${type}`}>

      {/* Mostra la generazione */}
      <span className="generation-badge">
        {getGeneration(pokemon.id)}
      </span>

      {/* Mostra l'ID del Pokémon */}
      <p className="pokemon-id">
        #{pokemon.id.toString().padStart(3, "0")}
      </p>

      {/* Immagine del Pokémon */}
      <img
        className="card-image"
        src={imageSrc}
        alt={pokemon.name}
      />

      {/* Nome del Pokémon */}
      <h2 className="card-title">{pokemon.name}</h2>

      {/* Tipo del Pokémon */}
      <p className="card-text">
        Type: {type}
      </p>

      {/* Cambia tra versione normale e shiny */}
      <button onClick={() => setShiny(!shiny)}>
        {shiny ? "Normal" : "✨ Shiny"}
      </button>

    </div>
  );
}

// Esporta il componente
export default PokeCard;