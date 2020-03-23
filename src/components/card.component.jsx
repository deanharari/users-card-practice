import React from "react"

import "./card.style.css"

export const Card = ({ user }) => {
  return (
    <div className="card-container">
      <img alt="avatar" src= {user.avatar} />
      <h2 className="cardText">{user.fullName}</h2>
      <span className="cardText">{user.email}</span>
    </div>

  );
}