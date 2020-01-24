import axios from "axios";

export const fetchSmurf = () => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
