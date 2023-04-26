import React from 'react';
import nutriquestLogo from '../../../assets/nutriquestLogo.png';
import './index.scss';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { FaUser, FaBell } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import userGrey from '../../../assets/userGrey.png';

export default function Topbar() {
  return ( <div className='topbar-main'>
    <img className='nutriquest-Logo' src={nutriquestLogo} alt='nutriquestLogo'/>
    <div className='react-icons'> 
      {/* Wrap all icons in the same div so we can arrange them */}
      <GoSearch size = {23} className='react-icon'/>
      <AiFillHome size = {26} className='react-icon'/>
      <FaUser size = {23} className='react-icon'/>
      <BsFillBriefcaseFill size = {26}  className='react-icon'/>
      <AiFillMessage size = {26} className='react-icon'/>
      <FaBell size = {23} className='react-icon'/>
    </div>
    <img className='userGrey' src={userGrey} alt='userGrey'/>
  </div>
  );
}
