import SearchBar from "./SearchBar.jsx";

function Header({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  imageMode,
  setImageMode
}) {
  return (
    <header className="header">

      {/* Titolo e sottotitolo */}
      <div className="header-left">
        <h1 className="title">Pokédex</h1>
        <p className="subtitle">Starter Pokémon Collection</p>
      </div>

      {/* Barra di ricerca e filtro per tipo */}
      <div className="header-controls">
        <SearchBar search={search} setSearch={setSearch} />

        <select
          className="type-filter"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
        </select>
      </div>

      {/* Pulsante per cambiare modalità immagine */}
      <button
        className="mode-button"
        onClick={() =>
          setImageMode(
            imageMode === "artwork"
              ? "pixel"
              : "artwork"
          )
        }
      >
        {imageMode === "artwork"
          ? "🎮 Pixel"
          : "🎨 Artwork"}
      </button>

    </header>
  );
}

export default Header;