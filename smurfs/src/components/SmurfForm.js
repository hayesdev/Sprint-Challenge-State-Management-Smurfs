import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

export const SmurfForm = props => {
  const [state, setState] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  //   const addSmurfs = smurf => {
  //     props.addSmurf(smurf);
  //   };

  //   const removeSmurfs = smurf => {
  //     props.removeSmurf(smurf);
  //   };

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.height]: e.target.value
    });
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={handleChanges}
          />
        </div>
        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={handleChanges}
        />

        <div>
          <button>Add Smurf</button>
        </div>
        {/* <button onClick={removeSmurfs}>Remove</button> */}
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
