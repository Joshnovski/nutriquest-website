import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 35, color: "#343434" }} spin />;

export default function Loader() {
  return (
    <div className='loader'>
        <Spin indicator={antIcon} />
        <p>Please wait</p>
    </div>
  );
}