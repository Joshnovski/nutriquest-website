import React, { useState, useMemo } from 'react';
import { postStatus, getStatus } from '../../../api/FirestoreAPI';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import ModalComponent from '../Modal';
import PostsCard from '../PostsCard';

import "./index.scss";

export default function PostStatus() {
  let userEmail = localStorage.getItem('userEmail');
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allStatus, setAllStatus] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: userEmail,
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, [])

  return (
    <div className='post-status-main'>
      <div className='post-status'>
        <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
      </div>

      <ModalComponent 
      setStatus={setStatus} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      status = {status}
      sendStatus = {sendStatus}
      />
 
      <div>
        {allStatus.map((posts) => {
          return (
            <PostsCard posts={posts}/>
          )
        })}
      </div>
    </div>
  );
} 