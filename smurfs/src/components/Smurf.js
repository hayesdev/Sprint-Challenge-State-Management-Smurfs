import React from "react";
import { connect } from "react-redux";

import { SmurfList } from "./SmurfList";
import { SmurfForm } from "./SmurfForm";
import { fetchSmurf, addSmurf } from "../actions";

const Smurf = props => {
  return (
    <div>
      <h2>Add a new Smurf!</h2>
      <button className="btn" onClick={props.fetchSmurf}>
        Get Smurfs
      </button>
      <SmurfForm addSmurf={addSmurf} smurfs={props.smurfsOnProps} />
      <SmurfList smurfs={props.smurfsOnProps} />
    </div>
  );
};

const mapStateToProps = state => ({
  isLoadingOnProps: state.isLoading,
  smurfsOnProps: state.smurfs,
  errorOnProps: state.error
});

export default connect(mapStateToProps, { fetchSmurf, addSmurf })(Smurf);
