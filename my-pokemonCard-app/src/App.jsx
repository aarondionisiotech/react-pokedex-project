import { useEffect, useState } from 'react';
import PokeCard from "./components/PokeCard.jsx";
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import './App.css';

function App() {

  // Stati dell'app
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [typeFilter, setTypeFilter] = useState("all");
  const [imageMode, setImageMode] = useState("pixel");

  // Carica i Pokémon all'avvio dell'app
  useEffect(() => {

    async function getPokemon() {

      // Lista degli starter Pokémon (Gen 1 - Gen 4)
      const names = [
        // Gen 1
        "bulbasaur", "ivysaur", "venusaur",
        "charmander", "charmeleon", "charizard",
        "squirtle", "wartortle", "blastoise",

        // Gen 2
        "chikorita", "bayleef", "meganium",
        "cyndaquil", "quilava", "typhlosion",
        "totodile", "croconaw", "feraligatr",

        // Gen 3
        "treecko", "grovyle", "sceptile",
        "torchic", "combusken", "blaziken",
        "mudkip", "marshtomp", "swampert",

        // Gen 4
        "turtwig", "grotle", "torterra",
        "chimchar", "monferno", "infernape",
        "piplup", "prinplup", "empoleon"
      ];

      // Recupera i dati dalla PokéAPI
      const data = await Promise.all(
        names.map(async (name) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          return res.json();
        })
      );

      // Salva i Pokémon nello stato
      setPokemon(data);
    }

    getPokemon();
  }, []);

  return (
    <main className="app">

      {/* Header con ricerca, filtro e cambio immagine */}
      <Header
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        imageMode={imageMode}
        setImageMode={setImageMode}
      />

      {/* Griglia delle card Pokémon */}
      <div className="card-container">
        {pokemon
          // Filtra per nome
          .filter((poke) =>
            poke.name.toLowerCase().includes(search.toLowerCase())
          )

          // Filtra per tipo
          .filter((poke) =>
            typeFilter === "all"
              ? true
              : poke.types.some((t) => t.type.name === typeFilter)
          )

          // Crea una card per ogni Pokémon
          .map((poke) => (
            <PokeCard
              key={poke.id}
              pokemon={poke}
              imageMode={imageMode}
            />
          ))}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;