import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

export const SmurfForm = props => {
  const [state, setState] = useState([
    {
      name: "",
      age: "",
      height: "",
      id: Date.now()
    }
  ]);

  // const addSmurf = { addSmurf };
  // const addSmurf = smurf => {
  //   props.addSmurf(smurf);
  // };

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    // console.log(state);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.smurfs);
    props.addSmurf();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value={state.name}
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            // value={state.age}
            onChange={handleChanges}
          />
        </div>
        <input
          type="text"
          name="height"
          placeholder="Height"
          // value={state.height}
          onChange={handleChanges}
        />

        <div>
          <button className="btn">Add Smurf</button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

// {
//     name: state.name,
//     age: state.age,
//     height: state.height,
//     id: state.id
//   }
export default connect(mapStateToProps, { addSmurf })(SmurfForm);
