import React from "react";
import { connect } from "react-redux";
import { addSmurf, removeSmurf } from "../actions/SmurfActions";

import { fetchSmurf } from "../actions";

const Smurf = props => {
  //   handleChanges = e => {
  //     e.preventDefault();
  //   };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const addSmurfs = smurf => {
    props.addSmurf(smurf);
  };

  const removeSmurfs = smurf => {
    props.removeSmurf(smurf);
  };

  return (
    <form
      // onSubmit={handleSubmit}
      onClick={handleSubmit}
    >
      <div>
        {!props.smurf && <h2>Add a new Smurf!</h2>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          //   onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.age}
          //   onChange={handleChanges}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={props.height}

          //   onChange={handleChanges}
        />
        <button onClick={props.fetchSmurf}>Add Smurf</button>
        <button>Remove Smurf</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isLoadingOnProps: state.isLoading,
  smurfsOnProps: state.smurfs,
  errorOnProps: state.error
});

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
