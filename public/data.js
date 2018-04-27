
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

var d = new Date();
let result = (new Date(d.getTime() * 1000)).toLocaleDateString();
console.log(result);


var email = document.getElementById("email");
var userId;

const userFile = [];

db.collection("email").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        userFile.push(doc);
    });
});
console.log(userFile);
function clicked() {
    console.log(email.value);

    let result = "no";

    for (let i = 0; i < userFile.length; i++) {
        if (userFile[i].data().email === email2.value) {
            alert("Welcome back!");            
            location.href="main.html";
            console.log(userFile[i].id);
            window.userId= userFile[i].id;
            break;
        }
        
        result = "yes";
    }


    if (result === "yes") {
        db.collection("email").add(
        { email: email.value }
        )
        .then(function (docRef) {
            console.log("added!!" + docRef.id);
            email.value = "";
            alert("Welcome to Recette!!");
            
            window.userId = docRef.id;
            console.log(userId);
            location.href = "main.html"
            
        });
    }
    
}
var userId2 = window.userId;
console.log(window.email2.value);
function add() {
    let adding = [];
    adding[0] = { name: "potato", time: "6"};
    console.log(window.userId2);
    window.db.collection("email").doc("113AqkbYgbBVfexnhA7b").add(
        adding[0]
    );
    
}



