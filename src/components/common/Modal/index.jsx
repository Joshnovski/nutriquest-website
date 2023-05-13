import React from "react";
import { Modal, Button } from "antd";
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
}) => {
  return (
    <>
      <Modal
        title={isEdit ? "Edit Post" : "Create a Post"}
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
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
        <textarea
          className="modal-input"
          rows={3}
          cols={3}
          placeholder="What do you want to talk about?"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />

        <label for="pic-upload">
          <AiOutlinePicture size={35} className="picture-icon" />
        </label>
        <input
          id="pic-upload"
          type={"file"}
          hidden
          onChange={(event) => setCurrentImage(event.target.files[0])}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
