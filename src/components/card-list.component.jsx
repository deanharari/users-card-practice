import React from "react"

import "./card-list.style.css"

export const Cardlist = props => {
  return (
    <div className="card-list">
        { props.users.map(users => (
            <h1 key={ users.id }> { users.first_name + " " + users.last_name } </h1>
          ))}
    </div>


  );
}