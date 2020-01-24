import React from "react";
import { connect } from "react-redux";
import { addSmurf, removeSmurf } from "../actions/SmurfActions";

const Smurf = props => {
  //   handleChanges = e => {
  //     e.preventDefault();
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     // props.addSmurf()
  //   };

  const add = smurf => {
    props.addSmurf(smurf);
  };

  const remove = smurf => {
    props.removeSmurf(smurf);
  };

  return (
    <form
    // onSubmit={handleSubmit}
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
        <button add={add}>Add Smurf</button>
        <button remove={remove}>Remove Smurf</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isLoadingOnProps: state.isLoading,
  smurfsOnProps: state.smurfs,
  errorOnProps: state.error
});

export default connect(mapStateToProps, { addSmurf, removeSmurf })(Smurf);
