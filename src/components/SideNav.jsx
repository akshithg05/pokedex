import { first151Pokemon, getFullPokedexNumber } from "../utils";
import { useState } from "react";

export default function SideNav({ selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
    // if full pokedex number includes current search value, return true
    if (getFullPokedexNumber(eleIndex).includes(searchValue)) {
      return true;
    }
    // if pokemon name inludes current search value, return true
    if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    // else exclude from array
    return false;
  });
  return (
    <nav className={"" + (showSideMenu ? "open" : "")}>
      <div className={"header " + (showSideMenu ? "open" : "")}>
        <button className="open-nav-button" onClick={handleCloseMenu}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokédex</h1>
      </div>
      <input
        placeholder="Eg. 001 or Bulba..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            className={`nav-card ` + (truePokedexNumber === selectedPokemon ? "nav-card-selected" : "")}
            key={pokemonIndex}
            onClick={() => {
              setSelectedPokemon(truePokedexNumber);
              handleCloseMenu()
            }}
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
