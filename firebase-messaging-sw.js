importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js");
importScripts("lTbJF.js");


firebase.initializeApp(firebaseSdkConfig); // From lTbJF.js

const messaging = firebase.messaging();

// Optional:
//messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
//});