import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const getShowInfos = () => async (dispatch) => {
  try {
    dispatch({
      type: "SHOW_INFOS_LOADING",
    });

    const response = await axios.get(`${BASE_URL}/shows/6771`);

    dispatch({
      type: "SHOW_INFOS_SUCCESS",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "SHOW_INFOS_FAIL",
    });
  }
};

export const getEpisodesList = () => async (dispatch) => {
  try {
    dispatch({
      type: "EPISODES_LIST_LOADING",
    });

    const response = await axios.get(`${BASE_URL}/shows/6771/episodes`);

    dispatch({
      type: "EPISODES_LIST_SUCCESS",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "EPISODES_LIST_FAIL",
    });
  }
};
