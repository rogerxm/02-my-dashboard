import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "151 Pokémons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-10 font-semibold text-center">
        Pokémons Favoritos
        <small className="text-blue-700 font-light"> Global State</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
