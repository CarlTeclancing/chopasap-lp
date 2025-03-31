import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";
import { getPassword } from "./functions";

const auth = getAuth(app)

export async function siginWithEmail(email, id,  code) {
  const password = await getPassword(id, code)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
export function onAuthChange(func) {
    onAuthStateChanged(auth, func)
}