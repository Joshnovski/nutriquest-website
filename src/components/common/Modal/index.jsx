import React from "react";
import { Modal, Button } from "antd";
import "./index.scss";

const ModalComponent = ({
  modalOpen,
  setModalOpen,
  sendStatus,
  setStatus,
  status,
  isEdit,
  updateStatus,
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
        <input
          className="modal-input"
          placeholder="What do you want to talk about?"
          onChange={(event) => setStatus(event.target.value)}
          value={status}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;
