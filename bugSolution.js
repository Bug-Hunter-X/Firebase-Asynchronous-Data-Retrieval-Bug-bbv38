This revised code snippet addresses the asynchronous nature of Firebase's `onSnapshot` method. The data is now correctly accessed within the callback function, ensuring it's available before use:
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, where } from "firebase/firestore";

// Initialize Firebase
// ... (Replace with your Firebase config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const q = query(collection(db, 'yourCollection'), where('fieldName', '==', 'yourValue'));

const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(doc.data()); // Access data here, correctly
  });
});
```