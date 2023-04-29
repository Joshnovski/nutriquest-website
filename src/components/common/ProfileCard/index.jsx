import React from 'react';
import "./index.scss";

export default function ProfileCard({currentUser}) {
  return (
    <div className='profile-card'>
        <h3 className='username'>{currentUser.name}</h3>
    </div>
  )
}
 