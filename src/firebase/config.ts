import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAflstppbYn9KhHuAhkfWVKkWHvau9gT70',
  authDomain: 'tripx-f30e3.firebaseapp.com',
  projectId: 'tripx-f30e3',
  storageBucket: 'tripx-f30e3.appspot.com',
  messagingSenderId: '130572613498',
  appId: '1:130572613498:web:3ee3aa6d9d40adee3f08c3',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

export { auth, db }
