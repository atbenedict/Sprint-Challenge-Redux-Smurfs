import React from "react";

export default function Smurf(props) {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <h1>{props.smurf.age}</h1>
      <h1>{props.smurf.height}</h1>
      <h1>{props.smurf.id}</h1>
    </div>
  );
}
