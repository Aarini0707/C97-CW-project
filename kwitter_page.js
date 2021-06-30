//YOUR FIREBASE LINKS
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
function getData() {
room_name=localStorage.getItem("room_name");
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
button_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_tag+message_tag+button_tag+span_tag;

document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("username");


function send(){
msg=document.getElementById("msg").value;
room_name=localStorage.getItem("room_name");
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").innerHTML="";
}

function updatelike(message_id){
      console.log("Click on like button: "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}