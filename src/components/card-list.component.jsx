import React from "react"

import { Card } from "./card.component"

import "./card-list.style.css"

export const Cardlist = ({ user }) => (
  <div className="card-list">
    {user.map(user => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);