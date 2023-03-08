// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFireStore } from 'firebase/firesore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD78OifBBKn4KQ9oGNxsaZvIEOnMOXyHDQ',
    authDomain: 'realtor-clone-app-eb226.firebaseapp.com',
    projectId: 'realtor-clone-app-eb226',
    storageBucket: 'realtor-clone-app-eb226.appspot.com',
    messagingSenderId: '326245767617',
    appId: '1:326245767617:web:38b781718c810305a6b740'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore();
