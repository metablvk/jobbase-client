import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAceoBgi2u6cx-OHNPw-eYr6jsZDTcdIrM',
  authDomain: 'jobbase-bcd8f.firebaseapp.com',
  projectId: 'jobbase-bcd8f',
  storageBucket: 'jobbase-bcd8f.appspot.com',
  messagingSenderId: '642861875701',
  appId: '1:642861875701:web:f4c1b901f6e5a3bfa9a0bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);
