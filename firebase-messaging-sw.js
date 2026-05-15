importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js");
importScripts("F76dW.js");


firebase.initializeApp(firebaseSdkConfig); // From F76dW.js

const messaging = firebase.messaging();

// Optional:
//messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
//});