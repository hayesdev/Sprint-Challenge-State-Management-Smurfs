import { ADD_SMURF, REMOVE_SMURF } from "../actions/SmurfActions";

export const initialState = {
  isLoading: false,
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ],
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCHING_SMURF_START:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case FETCHING_SMURF_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     smurf: action.payload
    //   };
    // case FETCHING_SMURF_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     error: action.payload.error
    //   };
    case ADD_SMURF:
      return {
        ...state,
        smurf: action.payload
      };

    case REMOVE_SMURF:
      return {
        ...state
        // following same logic as car-sales project
        // features: state.car.features.filter(
        //     item => item.id !== action.payload.id
        //   )
      };

    default:
      return state;
  }
};
