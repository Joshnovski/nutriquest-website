import React, { useState, useMemo } from "react";
import { getStatus } from "../../../api/FirestoreAPI";
import PostsCard from "../PostsCard";
import "./index.scss";

export default function ProfileCard({ currentUser, onEdit }) {
  const [allStatus, setAllStatus] = useState([]);

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <button onClick={onEdit}>Edit</button>
        </div>
        <div className="profile-info">
          <div>
            <h3 className="userName">{currentUser.name}</h3>
            <p className="userHeadline">{currentUser.headline}</p>
            <p className="location">{currentUser.location}</p>
          </div>

          <div className="right-info">
            <p className="college">{currentUser.college}</p>
            <p className="company">{currentUser.company}</p>
          </div>
        </div>
      </div>

      <div className="post-status-main">
        {allStatus
          .filter((item) => {
            return item.userEmail === localStorage.getItem("userEmail");
          })
          .map((posts) => {
            return (
              <div key={posts.id}>
                <PostsCard posts={posts} />
              </div>
            );
          })}
      </div>
    </>
  );
}
