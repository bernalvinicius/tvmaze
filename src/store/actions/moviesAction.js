import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const getMoviesList = () => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIES_LIST_LOADING",
    });

    const response = await axios.get(`${BASE_URL}/shows`);

    dispatch({
      type: "MOVIES_LIST_SUCCESS",
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: "MOVIES_LIST_FAIL",
    });
  }
};

// export const GetPokemon = (pokemon) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "POKEMON_MULTIPLE_LOADING",
//     });

//     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     dispatch({
//       type: "POKEMON_MULTIPLE_SUCCESS",
//       payload: res.data,
//       pokemonName: pokemon,
//     });
//   } catch (e) {
//     dispatch({
//       type: "POKEMON_MULTIPLE_FAIL",
//     });
//   }
// };
