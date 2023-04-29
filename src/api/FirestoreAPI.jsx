import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import {toast} from "react-toastify";

let dbRef = collection(firestore, 'posts');
let userRef = collection(firestore, 'users');

export const postStatus = (object) =>{
    addDoc(dbRef, object)
    .then((res) => {
        toast.success("Document has been added successfully")
    })
    .catch((err) => {
        console.log(err);
    });
};

export const getStatus = (setAllStatus) => {
    onSnapshot(dbRef, (response) => {
        setAllStatus(
            response.docs.map((docs) => {
                return {...docs.data(), id: docs.id };
        }));
    });
};

export const postUserData = (object) => {
    addDoc(userRef, object)
        .then(() => {})
        .catch((err) => {
            console.log(err);
        });
};

export const getCurrentUser = (setCurrentUser) => {
    onSnapshot(userRef, (response) => {
        setCurrentUser(
            response.docs.map((docs) => {
                return {...docs.data(), userID: docs.id };
            })
            .filter((item) => {
                return item.email === localStorage.getItem('userEmail');
            })[0]
        );
    });    
};