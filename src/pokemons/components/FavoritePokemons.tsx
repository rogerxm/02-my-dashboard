"use client";

import { useAppSelector } from "@/lib/hooks";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  //   const [pokemons, setPokemons] = useState(favoritePokemons);

  //   useEffect(() => {
  //     // console.log({ favoritePokemons });
  //     setPokemons(favoritePokemons);
  //   }, [favoritePokemons]);

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={200} className="text-red-500" />
      <span className="text-4xl font-bold">No hay favoritos</span>
    </div>
  );
};
