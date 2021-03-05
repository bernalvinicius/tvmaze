const initialState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const showListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_INFOS_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "SHOW_INFOS_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get movies",
      };
    case "SHOW_INFOS_SUCCESS":
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

export default showListReducer;
