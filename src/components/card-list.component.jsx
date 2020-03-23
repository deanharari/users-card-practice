import React from "react"

import { Card } from "./card.component"

import "./card-list.style.css"

export const Cardlist = props => {
  return (
    <div className="card-list">
      { props.users.map(users => (
        <Card key={ users.id } users= {users} />
      ))}
    </div>


  );
}