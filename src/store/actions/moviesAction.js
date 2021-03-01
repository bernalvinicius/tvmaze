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

export const getEpisodesList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "EPISODES_LIST_LOADING",
    });

    const response = await axios.get(`${BASE_URL}/shows/${id}/episodes`);

    dispatch({
      type: "EPISODES_LIST_SUCCESS",
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: "EPISODES_LIST_FAIL",
    });
  }
};
