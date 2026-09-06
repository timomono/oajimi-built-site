importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.5.2/firebase-messaging-compat.js");
importScripts("q9VYm.js");


firebase.initializeApp(firebaseSdkConfig); // From q9VYm.js

const messaging = firebase.messaging();

// Optional:
//messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
//});
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="292bdfb5-a02b-5889-9b6c-f59022227caa")}catch(e){}}();
//# debugId=292bdfb5-a02b-5889-9b6c-f59022227caa
