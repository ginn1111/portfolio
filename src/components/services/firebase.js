import { initializeApp } from "firebase/app";
import { getStorage, ref, getBlob } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBEI0m6kCeAv-WFKTHMcfgpEo3whqAZ1o8",
  authDomain: "portfolio-98f89.firebaseapp.com",
  projectId: "portfolio-98f89",
  storageBucket: "portfolio-98f89.appspot.com",
  messagingSenderId: "626024921505",
  appId: "1:626024921505:web:0de432689b5f7b786773e0",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const getCV = (callback) => {
  getBlob(ref(storage, "Intern_FE_PhamVanThuan.pdf"))
    .then((blob) => {
      callback(blob);
    })
    .catch(console.log);
};

export const getAvatar = (callback) => {
  getBlob(ref(storage, "avatar.jpg"))
    .then((blob) => {
      callback(blob);
    })
    .catch(console.log);
};
