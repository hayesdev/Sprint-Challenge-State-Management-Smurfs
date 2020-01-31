import React from "react";

export const NewSmurf = props => {
  return (
    <div className="smurf-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
};
