import React from "react";

export const NewSmurf = props => {
  return (
    <div className="smurf-card">
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h3>Height: {props.height}</h3>
    </div>
  );
};
