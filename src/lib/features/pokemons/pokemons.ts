import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   //   if (typeof localStorage === "undefined") return {};
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );

//   return favorites;
// };

const initialState: PokemonsState = {
  favorites: {},
  //   "1": { id: "1", name: "bulbasaur" },
  //   "4": { id: "4", name: "charmander" },
  //   "6": { id: "6", name: "charizard" },
  //   "7": { id: "7", name: "squirtle" },
  //   "25": { id: "25", name: "pikachu" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
