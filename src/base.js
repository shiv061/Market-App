import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC7YivSamC4I2UAB17IvcnlLZeAamON3C4',
  authDomain: 'soy-geography-232620.firebaseapp.com',
  databaseURL: 'https://soy-geography-232620.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
