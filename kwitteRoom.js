//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDFwUi6atyDNFQYQy2dXgnOcwRyKKxrbSc",
    authDomain: "kuiter-8dca0.firebaseapp.com",
    databaseURL: "https://kuiter-8dca0-default-rtdb.firebaseio.com",
    projectId: "kuiter-8dca0",
    storageBucket: "kuiter-8dca0.appspot.com",
    messagingSenderId: "882850165571",
    appId: "1:882850165571:web:dffd62f9cd6a32bc9c35f6"
  };
  firebase.initializeApp(firebaseConfig
    )
    
  
  function getData() {
    firebase
      .database()
      .ref("/")
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          roomNames = childKey;
          console.log("Nome da Sala - " + roomNames);
          row =
            "<div class='roomName' id=" +
            roomNames +
            " onclick='redirectToRoomName(this.id)' >#" +
            roomNames +
            "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
  }
  
  getData();
  var usuario = localStorage.getItem ('userName')
  console.log (usuario)
  document.getElementById('userName').innerHTML = 'bem vindo ' + usuario
  
  function addRoom () {
  nomesala  = document.getElementById('roomName').value
  firebase.database().ref('/').child(nomesala).update({
    purpose: 'adicionar nome da sala '
  })
  localStorage.setItem('roomName', nomesala)
  window.location = 'kwitterPage.html'
  }
  function redirectToRoomName (nome){
  console.log(nome)
  localStorage.setItem ('roomName', nome)
  window.location = 'kwitterPage.html'
  
  

  
  
  }
  function logout () {
    localStorage.removeItem('userName')
    localStorage.removeItem('roomName')
    window.location = 'index.html'
    
    }
  
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        console.log("Nome da Sala - " + roomNames);
        row =
          "<div class='roomName' id=" +
          roomNames +
          " onclick='redirectToRoomName(this.id)' >#" +
          roomNames +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}
getData()