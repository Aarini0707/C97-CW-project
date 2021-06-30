function adduser(){
    username=document.getElementById("input_username").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}