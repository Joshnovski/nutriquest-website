import React, { useEffect } from 'react'
import HomeComponent from '../components/HomeComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, res => {
            if (!res?.accessToken){
                navigate('/')
                }
        });
    }, []);
  return <HomeComponent />;
}
