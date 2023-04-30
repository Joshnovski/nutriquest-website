import { firestore } from "../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");

export const postStatus = (object) => {
  addDoc(dbRef, object)
    .then((res) => {
      toast.success("Post has been submitted");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
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
      response.docs
        .map((docs) => {
          return { ...docs.data(), userID: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
    );
  });
};

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated");
    })
    .catch((err) => {
      console.log(err);
    });
};
