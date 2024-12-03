import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDO5Gy-b5WAaxGLZbe8Rgkf2w2VUyFR9M0",
  authDomain: "arjie-puylong-portfolio.firebaseapp.com",
  projectId: "arjie-puylong-portfolio",
  storageBucket: "arjie-puylong-portfolio.firebasestorage.app",
  messagingSenderId: "1080910763740",
  appId: "1:1080910763740:web:66be6e7a73a1e3cf850619",
  measurementId: "G-PPLERHVWTR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);