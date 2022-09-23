var firebaseConfig = {
    apiKey: "AIzaSyAbYEE4AUSmFs3ku2V0Xqcsg_oCN5njMZQ",
    authDomain: "kwitter-70076.firebaseapp.com",
    databaseURL: "https://kwitter-70076-default-rtdb.firebaseio.com",
    projectId: "kwitter-70076",
    storageBucket: "kwitter-70076.appspot.com",
    messagingSenderId: "280142597249",
    appId: "1:280142597249:web:7ae3e2f20a4d39e5811180"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}