import React from "react";
import { connect } from "react-redux";
import { addSmurf, removeSmurf } from "../actions/SmurfActions";
import { SmurfList } from "./SmurfList";

import { fetchSmurf } from "../actions";

const Smurf = props => {
  //   const handleChanges = e => {
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
      onSubmit={handleSubmit}
      //   onClick={handleSubmit}
    >
      <div>
        {!props.smurfs && <h2>Add a new Smurf!</h2>}
        <button onClick={props.fetchSmurf}>Get Smurfs</button>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value={props.name}
            // onChange={handleChanges}
          />
        </div>
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            // value={props.age}
            // onChange={handleChanges}
          />
        </div>
        <input
          type="text"
          name="height"
          placeholder="Height"
          //   value={props.smurfsOnProps}

          //   onChange={handleChanges}
        />

        <div>
          <button onClick={addSmurfs}>Add</button>
        </div>
        <button onClick={removeSmurfs}>Remove</button>
      </div>
      <SmurfList smurfs={props.smurfsOnProps} />
      <h2>{}</h2>
    </form>
  );
};

const mapStateToProps = state => ({
  isLoadingOnProps: state.isLoading,
  smurfsOnProps: state.smurfs,
  errorOnProps: state.error
});

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
