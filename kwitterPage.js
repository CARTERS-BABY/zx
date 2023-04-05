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
  


  
  var userName = localStorage.getItem("userName");
  var roomName = localStorage.getItem("roomName");
  
  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
      name: userName,
      message: msg,
      like: 0,
    });
    document.getElementById("msg").value = "";
  }
  
  function getData() {
    firebase
      .database()
      .ref("/" + roomName)
      .on("value", function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey != "purpose") {
            firebaseMessageId = childKey;
            messageData = childData;
            //Início do código
  console.log(firebaseMessageId)
  console.log(messageData)
var nome = messageData ['name']
var mensagem = messageData ['message']
var like = messageData ['like']
var exbirnome =`<h4>${nome}<img class = 'user_tick' src = 'tick.png'></h4>`
var exibirmenssagem = `<h4 class="message_h4"> ${mensagem} </h4>`
var btnlike = `<button class="btn btn-warning" id="${firebaseMessageId}" value="${like}" onclick="updateLike(this.id)">`
var iclike = `<span class="glyphicon glyphicon-thumbs-up"> Like: ${like} </span> </button> <hr>`
var roou = exbirnome + exibirmenssagem + btnlike + iclike
document.getElementById ('output').innerHTML += roou 







            //Fim do código
          }
        });
      });
  }
  getData();
  function updateLike (id ) {
var likes = document.getElementById(id).value
var likeatt = Number (likes) + 1 
firebase.database().ref(roomName).child(id).update({like:likeatt})

  }
  function logout (){
    localStorage.removeItem('userName')
    localStorage.removeItem('roomName')
    window.location = 'index.html'
    
    }