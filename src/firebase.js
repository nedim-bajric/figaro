import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF0S1ysEypU1vER0qlvdlY_ndcC9eMXxs",
  authDomain: "figaro-ea217.firebaseapp.com",
  projectId: "figaro-ea217",
  storageBucket: "figaro-ea217.appspot.com",
  messagingSenderId: "655818831842",
  appId: "1:655818831842:web:acbf505958f28be3b8abbb",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
