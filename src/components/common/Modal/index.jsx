import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import "./index.scss";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  setStatus,
  status,
  isEdit,
  updateStatus,
  uploadPostImage,
  setPostImage,
  postImage,
  currentPost,
  setCurrentPost,
}) => {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Modal
        title={isEdit ? "Edit Post" : "Create a Post"}
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
          setPostImage("");
          setCurrentPost({});
        }}
        footer={[
          <Button
            onClick={isEdit ? updateStatus : sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
            style={{ backgroundColor: status.length > 0 ? "#8ab267" : "" }}
          >
            {isEdit ? "Update" : "Post"}
          </Button>,
        ]}
      >
        <hr></hr>
        <div className="posts-body">
          <textarea
            className="modal-input"
            rows={3}
            cols={3}
            placeholder="What do you want to talk about?"
            onChange={(event) => setStatus(event.target.value)}
            value={status}
          />

          {progress === 0 || progress === 100 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress
                type="circle"
                strokeColor="grey"
                percent={progress}
                format={(percent) =>
                  percent === 100 ? "Done!" : `${percent}%`
                }
              />
            </div>
          )}
          {postImage?.length > 0 || currentPost?.postImage?.length ? (
            <img
              className="preview-image"
              src={postImage || currentPost?.postImage}
              alt="postImage"
            />
          ) : (
            <></>
          )}
        </div>
        <label for="pic-upload">
          <AiOutlinePicture size={35} className="picture-icon" />
        </label>
        <input
          id="pic-upload"
          type={"file"}
          hidden
          onChange={(event) =>
            uploadPostImage(event.target.files[0], setPostImage, setProgress)
          }
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
