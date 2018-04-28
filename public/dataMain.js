// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1gf62sde2Zq_1FEnW9yutjmGJ8_jQt60",
    authDomain: "foodver-b888d.firebaseapp.com",
    databaseURL: "https://foodver-b888d.firebaseio.com",
    projectId: "foodver-b888d",
    storageBucket: "foodver-b888d.appspot.com",
    messagingSenderId: "223725439200"
};
firebase.initializeApp(config);

var db = firebase.firestore();
// Create a root reference
var storageRef = firebase.storage().ref();
// Create a reference to 'images/mountains.jpg'
var imagesRef = storageRef.child('images/');

var camBut = document.getElementById("camera");
var eleCounter = 0;

function openCamera() {
    document.getElementById("fileInput").click();
    var file = document.getElementById("fileInput");
    var frame = document.getElementById("frame");

    file.addEventListener('change', function (e) {
        var file = e.target.files[0];
        // Do something with the image file.
        frame.src = URL.createObjectURL(file);
    });
    console.log(file.value);
}

function addList() {
    var butClicked = document.getElementById("addBut");
    var list = document.getElementById("accordion");
    var card = document.createElement("div");
    var cardH = document.createElement("div");
    var cardB = document.createElement("div");
    var cardAn = document.createElement("a");
    var cardBody = document.createElement("div");

    card.setAttribute("class", "card");
    cardH.setAttribute("class", "card-header");
    cardAn.setAttribute("class", "card-link");
    cardAn.setAttribute("data-toggle", "collapse");
    cardAn.setAttribute("href", "#collapse" + eleCounter);
    cardAn.innerHTML = "item"+eleCounter;
    cardB.setAttribute("id", "collapse" + eleCounter);
    cardB.setAttribute("class", "collapse");
    cardB.setAttribute("data-parent", "#accordion");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = "YAYAYAYA";
    console.log(eleCounter);
    // butClicked.addEventListener('click', function () {



    // });
    cardH.appendChild(cardAn);
    cardB.appendChild(cardBody);
    card.appendChild(cardH);
    card.appendChild(cardB);
    list.appendChild(card);
    eleCounter++;
}

