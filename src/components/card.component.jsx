import React from "react"

import "./card.style.css"

export const Card = props => {
  return (
    <div className="card-container">
      <img alt="avatar" src= {props.users.avatar} />
      <h2 className="cardText"> { props.users.first_name + " " + props.users.last_name } </h2>
      <span className="cardText"> { props.users.email } </span>
    </div>

  );
}