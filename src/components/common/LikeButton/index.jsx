import React, { useMemo, useState } from "react";
import {
  likePost,
  getLikesByUser,
  postComment,
} from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegCommentDots, FaCommentDots } from "react-icons/fa";
import "./index.scss";

export default function LikeButton({ userId, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(postId, comment, getCurrentTimeStamp("LLL"));
    setComment("");
  };
  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="like-container">
      <p>
        {likesCount}{" "}
        {likesCount === 1 ? "Person has liked" : "People have liked"} this post
      </p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div className="likes-comment-inner">
          {liked ? (
            <AiFillLike
              className="like-btn"
              size={30}
              cursor="pointer"
              onClick={handleLike}
            />
          ) : (
            <AiOutlineLike
              className="like-btn"
              size={30}
              cursor="pointer"
              onClick={handleLike}
            />
          )}
          <p className={liked ? "green" : "white"} onClick={handleLike}>
            Like
          </p>
        </div>

        <div
          className="likes-comment-inner"
          onClick={() => setShowCommentBox(true)}
        >
          {showCommentBox ? (
            <FaCommentDots size={27} cursor="pointer" />
          ) : (
            <FaRegCommentDots size={27} cursor="pointer" onClick={handleLike} />
          )}

          <p className={showCommentBox ? "green" : "white"}>Comment</p>
        </div>
      </div>
      {showCommentBox ? (
        <>
          <input
            onChange={getComment}
            placeholder="Add a Comment..."
            className="comment-input"
            name="comment"
            value={comment}
          />
          <button className="add-comment-btn" onClick={addComment}>
            Add Comment
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
