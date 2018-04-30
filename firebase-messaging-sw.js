importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
   "messagingSenderId": "549745594706"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
   return self.registration.showNotification({}, {});
});