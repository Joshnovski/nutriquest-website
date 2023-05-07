import React, { useMemo, useState } from "react";
import { likePost, getLikesByUser } from "../../../api/FirestoreAPI";
import "./index.scss";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export default function LikeButton({ userId, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="like-container">
      {liked ? (
        <AiFillLike
          className="like-btn"
          size={25}
          cursor="pointer"
          onClick={handleLike}
        />
      ) : (
        <AiOutlineLike
          className="like-btn"
          size={25}
          cursor="pointer"
          onClick={handleLike}
        />
      )}
      <p onClick={handleLike}>{liked ? "Liked" : "Like"}</p>
      {likesCount}
      {/* Need a solution for style and placement of count. */}
    </div>
  );
}
