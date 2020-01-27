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

export const addSmurf = ({ name, age, height, id }) => {
  return dispatch => {
    dispatch({ type: "ADDING_SMURF_START" });
    return axios
      .post("http://localhost:3333/smurfs", { name, age, height, id })
      .then(res => {
        console.log(res.data);
        dispatch({ type: "ADDING_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "ADDING_SMURF_FAILURE", payload: err.response });
      });
  };
};
