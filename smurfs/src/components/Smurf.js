import React from "react";

export default function Smurf(props) {
  return (
    <div className="smurfCard">
      <h2>{`${props.name}`}</h2>
      <p>{`${props.age} smurf years old`}</p>
      <p>{`Height: ${props.height}`}</p>
      {/* <button onClick={props.deleteSmurf(props.id)} /> */}
    </div>
  );
}
