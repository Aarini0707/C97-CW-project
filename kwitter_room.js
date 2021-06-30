
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD9VMqA_AraZi4dyLtlGWeLr2HSHGjw4lg",
      authDomain: "kwitter-a1790.firebaseapp.com",
      databaseURL: "https://kwitter-a1790-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1790",
      storageBucket: "kwitter-a1790.appspot.com",
      messagingSenderId: "353121498876",
      appId: "1:353121498876:web:e189affd7a5bd6ddb84979"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="Welcome "+user_name+"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
      room_name=document.getElementById("input_create").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirecttoroom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}