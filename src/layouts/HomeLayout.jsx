import React from 'react';
import Home from '../pages/Home';
import Topbar from '../components/common/Topbar';

export default function HomeLayout() {
  return (
    <div>
        <Topbar/>
        <Home/>
    </div>
  )
}
