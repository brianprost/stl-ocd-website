import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics"
import firebaseConfig from "./firebase.config";

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default firebaseApp;
