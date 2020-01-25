import React from "react";
import { connect } from "react-redux";

import { SmurfList } from "./SmurfList";
import { SmurfForm } from "./SmurfForm";
import { fetchSmurf } from "../actions";

const Smurf = props => {
  return (
    <div>
      {!props.smurfs && <h2>Add a new Smurf!</h2>}
      <button onClick={props.fetchSmurf}>Get Smurfs</button>
      <SmurfForm />
      <SmurfList smurfs={props.smurfsOnProps} />
      <h2>{}</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoadingOnProps: state.isLoading,
  smurfsOnProps: state.smurfs,
  errorOnProps: state.error
});

export default connect(mapStateToProps, { fetchSmurf })(Smurf);
