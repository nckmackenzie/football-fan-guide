import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqq5RPjITvJZYpgztXFRUT_nVVKgCZgs8',
  authDomain: 'foods-6a521.firebaseapp.com',
  projectId: 'foods-6a521',
  storageBucket: 'foods-6a521.appspot.com',
  messagingSenderId: '170319436123',
  appId: '1:170319436123:web:01918a09349f142387227e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
