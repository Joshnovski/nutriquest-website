import React from "react";

export default function ConnectedUsers({ user, getCurentUser }) {
  return (
    <div className="grid-child" onClick={() => getCurentUser(user.id)}>
      <p>{user.name}</p>
      <p>{user.headline}</p>
    </div>
  );
}
