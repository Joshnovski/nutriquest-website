import React, { useState } from "react";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Go back</button>
      </div>

      <div className="profile-edit-inputs">
        <input
          onChange={getInput}
          className="edit-input"
          placeholder="Name"
          name="name"
          value={editInputs.name}
        />
        <input
          onChange={getInput}
          className="edit-input"
          placeholder="Headline"
          name="headline"
          value={editInputs.headline}
        />
        <input
          onChange={getInput}
          className="edit-input"
          placeholder="Location"
          name="location"
          value={editInputs.location}
        />
        <input
          onChange={getInput}
          className="edit-input"
          placeholder="Company"
          name="company"
          value={editInputs.company}
        />
        <input
          onChange={getInput}
          className="edit-input"
          placeholder="College"
          name="college"
          value={editInputs.college}
        />
      </div>
      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
}
