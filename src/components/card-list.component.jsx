import React from "react"

import { Card } from "./card.component"

import "./card-list.style.css"

export const Cardlist = props => (
  <div className="card-list">
    {props.user.map(user => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);