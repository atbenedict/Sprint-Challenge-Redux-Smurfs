import React from "react";

export default function Smurf(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.height}</h1>
      <h1>{props.id}</h1>
    </div>
  );
}
