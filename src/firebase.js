import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDmR84xOvcdf31D44mey0umWBZQQkGuaRU",
    authDomain: "hueareyou-983d1.firebaseapp.com",
    databaseURL: "https://hueareyou-983d1.firebaseio.com",
    projectId: "hueareyou-983d1",
    storageBucket: "hueareyou-983d1.appspot.com",
    messagingSenderId: "463945390636",
    appId: "1:463945390636:web:2c360298e86e511ce10f89"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
