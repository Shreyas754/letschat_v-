var firebaseConfig = {
    apiKey: "AIzaSyDI_ZEp3L9lshzMe6EBx0I9xICFxZKq86k",
    authDomain: "letschat-80cdb.firebaseapp.com",
    projectId: "letschat-80cdb",
    storageBucket: "letschat-80cdb.appspot.com",
    messagingSenderId: "191638022836",
    appId: "1:191638022836:web:29bcf9417673e0df9f45e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
