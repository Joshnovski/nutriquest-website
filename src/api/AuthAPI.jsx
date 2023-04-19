import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
    try {
       let response = signInWithEmailAndPassword(auth, email, password);
       return response;
    } catch(err) {
      return err;
    }
};  