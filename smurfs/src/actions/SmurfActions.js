import Axios from "axios";

export const addSmurf = smurf => {
  console.log(smurf);
  return { type: "ADD_SMURF", payload: smurf };
};

export const ADD_SMURF = "ADD_SMURF";

// export const removeSmurf = smurf => {
//   return { type: "REMOVE_SMURF", payload: smurf };
// };

// export const REMOVE_SMURF = "REMOVE_SMURF";
