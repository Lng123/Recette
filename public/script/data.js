
var config = {
    apiKey: "AIzaSyDsDdSSCShjFlNOt1hTdcMbxisH1BSPgDE",
    authDomain: "recette-f3ef5.firebaseapp.com",
    databaseURL: "https://recette-f3ef5.firebaseio.com",
    projectId: "recette-f3ef5",
    storageBucket: "recette-f3ef5.appspot.com",
    messagingSenderId: "242135902717"
};
firebase.initializeApp(config);

var db = firebase.firestore();
var functions = firebase.functions();



var d = new Date();
let result = (new Date(d.getTime() * 1000)).toLocaleDateString();
console.log(result);

var email = document.getElementById("email");
var userId;

const userFile = [];

let getEmail = db.collection("email").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        userFile.push(doc);
    });
});

console.log(getEmail);
console.log(userFile);
function clicked() {
    console.log(email.value);

    let result = "no";

    for (let i = 0; i < userFile.length; i++) {
        if (userFile[i].data().email === email.value) {
            alert("Welcome back!");
            sessionStorage.setItem("userEmail", userFile[i].id);
            location.href = "main.html";
            console.log(userFile[i].id);
            email.value = "";
            userId = userFile[i].id;
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
                sessionStorage.setItem("userEmail", docRef.id);
                email.value = "";
                alert("Welcome to Recette!!");
                userId = docRef.id;
                console.log(userId);
                window.location.href = "main.html"

            });
    }

}
var userId2 = userId;
console.log(email.value);
function add() {
    let adding = [];
    adding[0] = { name: "potato", time: "6" };
    console.log(userId2);
    db.collection("email").doc("113AqkbYgbBVfexnhA7b").add(
        adding[0]
    );

}



