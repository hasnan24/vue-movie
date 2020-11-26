import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDNjbkf0M8gg2mN23EzmXxLW_9XfvHpglg",
    authDomain: "vue-movie-fa5ab.firebaseapp.com",
    databaseURL: "https://vue-movie-fa5ab.firebaseio.com",
    projectId: "vue-movie-fa5ab",
    storageBucket: "vue-movie-fa5ab.appspot.com",
    messagingSenderId: "440903103763",
    appId: "1:440903103763:web:08cd168364a88eebe816e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase