import axios from "axios";

export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURF_START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        dispatch({ type: "FETCHING_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "FETCHING_SMURF_FAILURE", payload: err.response });
      });
  };
};

export const addSmurf = state => {
  return dispatch => {
    dispatch({ type: "ADDING_SMURF_START" });
    axios
      .post("http://localhost:3333/smurfs", state)
      .then(res => {
        console.log(res.data);
        dispatch({ type: "ADDING_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "ADDING_SMURF_FAILURE", payload: err.data });
      });
  };
};
