const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const episodesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EPISODES_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "EPISODES_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get episodes",
      };
    case "EPISODES_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default episodesListReducer;
