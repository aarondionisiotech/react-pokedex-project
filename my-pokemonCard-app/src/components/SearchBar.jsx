function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-bar"
      type="text"

      /* Testo mostrato quando il campo è vuoto */
      placeholder="🔍 Search Pokémon..."

      /* Valore attuale della ricerca */
      value={search}

      /* Aggiorna il testo digitato dall'utente */
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;