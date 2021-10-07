import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfPnXJXLlL-aHA0LgoQ9pHDuLqkS00aus",
    authDomain: "unme-ef9d9.firebaseapp.com",
    projectId: "unme-ef9d9",
    storageBucket: "unme-ef9d9.appspot.com",
    messagingSenderId: "962568289874",
    appId: "1:962568289874:web:7c68ee302d209f8c9e298b"
  
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (person) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(person.email, person.password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      authProvider: "local",
      person
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};