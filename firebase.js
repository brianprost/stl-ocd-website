import firebase from 'firebase/app';
import "firebase/database";
import "firebase/analytics";
import firebaseConfig from './firebase.config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics(firebaseApp)

export default firebaseApp;