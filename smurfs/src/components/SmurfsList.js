import React from "react";
import Smurf from "./Smurf";

export default function SmurfsList(props) {
  console.log(props);
  return (
    <div className="smurfs-list">
      {props.smurfs.map(smurf => (
        <Smurf
          key={smurf.id}
          name={smurf.name}
          height={smurf.height}
          age={smurf.age}
        />
      ))}
    </div>
  );
}
