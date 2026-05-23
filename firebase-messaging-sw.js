importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js");
importScripts("uTDEz.js");


firebase.initializeApp(firebaseSdkConfig); // From uTDEz.js

const messaging = firebase.messaging();

// Optional:
//messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
//});