importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAvC3w2OJatNPTfOD0YE5-v24XYul2vg7s",
    authDomain: "anonymous-messages-692c3.firebaseapp.com",
    projectId: "anonymous-messages-692c3",
    storageBucket: "anonymous-messages-692c3.appspot.com",
    messagingSenderId: "152307243781",
    appId: "1:152307243781:web:f9e7787bcab188aefa756c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    const notificationTitle = 'New Background Message';
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/path/to/icon.png' // Add icon path
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
