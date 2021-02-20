importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyDcaDxPH5i3RYxHrvMSQ6Hp1GXpGaqZ284",
  authDomain: "angular-message.firebaseapp.com",
  projectId: "angular-message",
  storageBucket: "angular-message.appspot.com",
  messagingSenderId: "833883296279",
  appId: "1:833883296279:web:1ce3d8828f5b98f6080252",
  measurementId: "G-VTNXEL7FCB"
});
const messaging = firebase.messaging();
