import React from "react";
import { NewSmurf } from "./NewSmurf";

export const SmurfList = props => {
  return (
    <div className="smurf-list">
      {props.smurfs.map(smurf => (
        <NewSmurf
          key={smurf.id}
          name={smurf.name}
          age={smurf.age}
          height={smurf.height}
        />
      ))}
    </div>
  );
};
