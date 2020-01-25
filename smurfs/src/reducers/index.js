import { ADD_SMURF, REMOVE_SMURF } from "../actions/SmurfActions";

export const initialState = {
  isLoading: false,
  smurfs: [
    {
      name: " ",
      age: [],
      height: " ",
      id: 0
    }
  ],
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURF_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHING_SMURF_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case "FETCHING_SMURF_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    // case "ADDING_SMURF":
    //   return {
    //     ...state,
    //     [e.target.value]: e.target.value
    //   };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };

    case REMOVE_SMURF:
      return {
        ...state,
        // following same logic as car-sales project
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
      };

    default:
      return state;
  }
};
