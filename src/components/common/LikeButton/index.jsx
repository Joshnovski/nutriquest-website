import React, { useMemo, useState } from "react";
import {
  likePost,
  getLikesByUser,
  postComment,
  getComments,
} from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import {
  BsHandThumbsUp,
  BsFillHandThumbsUpFill,
  BsChatDots,
  BsChatDotsFill,
} from "react-icons/bs";
import "./index.scss";

export default function LikeButton({ userId, postId, currentUser }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(postId, comment, getCurrentTimeStamp("LLL"), currentUser?.name);
    setComment("");
  };
  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
  }, [userId, postId]);

  return (
    <div className="like-container">
      <p className="like-counter">
        {likesCount}{" "}
        {likesCount === 1 ? "Person has liked" : "People have liked"} this post
      </p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div className="likes-comment-inner">
          {liked ? (
            <BsFillHandThumbsUpFill
              size={30}
              cursor="pointer"
              onClick={handleLike}
            />
          ) : (
            <BsHandThumbsUp size={30} cursor="pointer" onClick={handleLike} />
          )}
          <p className={liked ? "green" : "white"} onClick={handleLike}>
            Like
          </p>
        </div>

        <div
          className="likes-comment-inner"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          {showCommentBox ? (
            <BsChatDotsFill size={30} className="like-btn" cursor="pointer" />
          ) : (
            <BsChatDots size={30} className="like-btn" cursor="pointer" />
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
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className="all-comments">
                  <p className="name">{comment.name}</p>
                  <p className="comment">{comment.comment}</p>
                  {/* <p>•</p> */}
                  <p className="timestamp">{comment.timeStamp}</p>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
