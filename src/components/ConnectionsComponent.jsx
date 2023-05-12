import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "../api/FirestoreAPI";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/ConnectionsComponent.scss";

export default function ConnectionsComponent({ currentUser }) {
  const [users, setUsers] = useState([]);
  const getCurentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="connections-main">
      {users.map((user) => {
        return user.id === currentUser.id ? (
          <></>
        ) : (
          <ConnectedUsers user={user} getCurentUser={getCurentUser} />
        );
      })}
    </div>
  );
}
