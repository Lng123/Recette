
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsDdSSCShjFlNOt1hTdcMbxisH1BSPgDE",
    authDomain: "recette-f3ef5.firebaseapp.com",
    databaseURL: "https://recette-f3ef5.firebaseio.com",
    projectId: "recette-f3ef5",
    storageBucket: "recette-f3ef5.appspot.com",
    messagingSenderId: "242135902717"
};

firebase.initializeApp(config);
console.log(sessionStorage.getItem("ingredient"));

var db = firebase.firestore();
var functions = firebase.functions();
var OCR = firebase.functions().httpsCallable('OCR');


var camBut = document.getElementById("camera");
var eleCounter = 0;
var a = sessionStorage.getItem("userEmail");
var ingList = [];
var userList = [];
var user = db.collection("email").doc(sessionStorage.getItem("userEmail"));

db.collection("ingredient").get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log(doc);
            ingList.push(doc.data());
        });
    });

user.collection("list").get()
    .then(function (querySnapshot) {
        if (querySnapshot !== null) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                userList.push({
                    name: doc.data().name,
                    expiaryDate: doc.data().expiaryDate,
                    id: doc.id
                });
            });
            showList();
        }
    });

function showList() {

    if (userList.length !== 0) {
        console.log(userList);
        for (let i = 0; i < userList.length; i++) {
            var list = document.getElementById("accordion");
            var card = document.createElement("div");
            var cardH = document.createElement("div");
            var cardB = document.createElement("div");
            var cardAn = document.createElement("a");
            var cardBody = document.createElement("div");
            var searchBut = document.createElement("button");
            var chkBox = document.createElement("input");
            var remBut = document.createElement("button");
            card.setAttribute("class", "card");
            card.setAttribute("id", "#number" + window.eleCounter);
            card.setAttribute("data-parent", "#accordion");
            cardH.setAttribute("class", "card-header");
            cardAn.setAttribute("class", "card-link");
            cardAn.setAttribute("data-toggle", "collapse");
            cardAn.setAttribute("href", "#collapse" + window.eleCounter);
            cardAn.innerHTML = userList[i].name;
            cardB.setAttribute("id", "collapse" + window.eleCounter);
            cardB.setAttribute("class", "collapse");
            cardB.setAttribute("data-parent", "#accordion");
            cardBody.setAttribute("class", "card-body");
            cardBody.innerHTML = "The ingredients will expire on " + "<b>" + userList[i].expiaryDate + "</b>";
            searchBut.setAttribute("onclick", "window.location.href = 'https://www.google.ca/search?q=" + userList[i].name + " receipe'");
            searchBut.setAttribute("class", "btn btn-outline-dark");
            searchBut.setAttribute("type", "button");
            searchBut.innerHTML = "search";
            chkBox.setAttribute("type", "checkbox");
            chkBox.setAttribute("id", "chkb");
            remBut.setAttribute("class", "btn btn-outline-dark");
            remBut.setAttribute("type", "button");
            remBut.innerHTML = "Remove";
            console.log(userList[i]);

            console.log(document.getElementById("number0"));
            cardH.appendChild(cardAn);
            cardH.appendChild(chkBox);
            cardB.appendChild(cardBody);
            cardB.appendChild(searchBut);
            cardB.appendChild(remBut);
            card.appendChild(cardH);
            card.appendChild(cardB);
            list.appendChild(card);

            remBut.addEventListener('click', function () {
                rmEle(userList[i].id, card);
            });
            window.eleCounter++;
        }
    }

}

function openCamera() {
    console.log("Entered the function");
    document.getElementById("fileInput").click();
    var file = document.getElementById("fileInput");
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (e) {
        var file = e.target.files[0];
        // Do something with the image file.
        var tmppath = URL.createObjectURL(file);
        console.log(file);
        console.log(tmppath);
        var url = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/FB1.gif?alt=media&token=28727220-181c-440e-87ae-4808b5c9ba28";
        OCR(url)
        .then(function(result) {
            console.log(result);
        }).catch(function(err) {
            console.log(err);
        });
    });

}

function addList() {
    var butClicked = document.getElementById("addBut");
    var list = document.getElementById("accordion");
    var card = document.createElement("div");
    var cardH = document.createElement("div");
    var cardB = document.createElement("div");
    var cardAn = document.createElement("a");
    var cardBody = document.createElement("div");
    var searchBut = document.createElement("button");
    var item = document.getElementById("foodName");
    var date = document.getElementById("date");
    var chkBox = document.createElement("input");
    var remBut = document.createElement("button");
    var id = "";
    console.log(date.value);
    console.log(ingList);
    if (recogEx(ingList, item)) {
        card.setAttribute("class", "card");
        card.setAttribute("id", "#number" + window.eleCounter);
        cardH.setAttribute("class", "card-header");
        cardAn.setAttribute("class", "card-link");
        cardAn.setAttribute("data-toggle", "collapse");
        cardAn.setAttribute("href", "#collapse" + window.eleCounter);
        cardAn.innerHTML = item.value;
        cardB.setAttribute("id", "collapse" + window.eleCounter);
        cardB.setAttribute("class", "collapse");
        cardB.setAttribute("data-parent", "#accordion");
        cardBody.setAttribute("class", "card-body");
        cardBody.innerHTML = "The ingredients will expire on " + "<b>" + date.value + "</b>";
        searchBut.setAttribute("onclick", "window.location.href = 'https://www.google.ca/search?q=" + item.value + " receipe'");
        searchBut.setAttribute("class", "btn btn-outline-dark");
        searchBut.setAttribute("type", "button");
        searchBut.innerHTML = "search";
        chkBox.setAttribute("type", "checkbox");
        chkBox.setAttribute("id", "chkb");
        remBut.setAttribute("class", "btn btn-outline-dark");
        remBut.setAttribute("type", "button");
        remBut.innerHTML = "Remove";
        console.log(ingList.id);
        console.log(window.eleCounter);
        // butClicked.addEventListener('click', function () {
        console.log(item);
        console.log(date);
        let ref = db.collection("email").doc(sessionStorage.getItem("userEmail"));
        ref.collection("list").add(
            {
                name: item.value,
                expiaryDate: date.value
            }
        )
            .then(function (docRef) {
                console.log(docRef);
                id = docRef.id;
            });
        id = '' + id;

        remBut.addEventListener('click', function () {
            rmEle(id, card);
        });

        cardH.appendChild(cardAn);
        cardH.appendChild(chkBox);
        cardB.appendChild(cardBody);
        cardB.appendChild(searchBut);
        cardB.appendChild(remBut);
        card.appendChild(cardH);
        card.appendChild(cardB);
        list.appendChild(card);
        window.eleCounter++;
    } else {
        alert("Sorry, we are still adding more ingredients!");
    }

}

function search(item) {
    window.location.href = "https://www.google.ca/search?q=" + item + " receipe";
}

function recogEx(list, item) {
    let result = false;
    let item2 = "" + item.value;
    console.log(list);
    console.log(item.value);
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === item2) {

            result = true;
        }
    };
    return result;
}

function rmEle(id, num) {
    var user2 = db.collection("email").doc(sessionStorage.getItem("userEmail"));
    console.log(id);
    console.log(user);
    console.log(num);
    user2.collection("list").doc(id).delete()
        .then(function (e) {

            document.getElementById("accordion").removeChild(num);

        }).catch(function (e) {
            console.log(e);
        })
}


