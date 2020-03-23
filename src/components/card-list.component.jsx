import React from "react"

import { Card } from "./card.component"

import "./card-list.style.css"

export const Cardlist = props => (
  <div className="card-list">
    {props.users.map(user => (
      <Card key={users.id} user={user} />
    ))}
  </div>
);