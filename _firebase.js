/**
 *
 * Please do not forget to comment out the _firebase.js line in
 * the .gitignore file if you plan to add the code of a project
 * using this repo to github. Otherwise everyone will be able
 * to see your credentials.
 *
 */

import firebase from 'firebase';

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'your-project.firebaseapp.com',
  databaseURL: 'https://your-project.firebaseiocom',
  projectId: 'your-project-id',
  storageBucket: 'your-project.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID'
};
firebase.initializeApp(config);

export default config;
