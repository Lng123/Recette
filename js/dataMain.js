// Initialize Firebase
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
// // Create a root reference
// var storageRef = firebase.storage().ref();
// // Create a reference to 'images/mountains.jpg'
// var imagesRef = storageRef.child('images/');

var camBut = document.getElementById("camera");
var eleCounter = 0;
var a = sessionStorage.getItem("userEmail");
//var ingList = [];
//var userList = [];
//var user = db.collection("email").doc(sessionStorage.getItem("userEmail"));
//db.collection("Ingredients").get()
//    .then(function (querySnapshot) {
//        querySnapshot.forEach(function (doc) {
//            // doc.data() is never undefined for query doc snapshots
//            console.log(doc.id, " => ", doc.data());
//            ingList.push(doc.data());
//        });
//    });
//user.collection("list").get()
//    .then(function (querySnapshot) {
//        if (querySnapshot !== null) {
//            querySnapshot.forEach(function (doc) {
//                // doc.data() is never undefined for query doc snapshots
//                console.log(doc.id, " => ", doc.data());
//                userList.push({
//                    name: doc.data().name,
//                    expiaryDate: doc.data().expiaryDate,
//                    id: doc.id
//                });
//            });
//            showList();
//        }
//    });

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
            searchBut.setAttribute("onclick", "window.location.href = 'https://www.google.ca/search?q=" + userList[i].value + " receipe'");
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
                rmEle(userList[i].id, window.eleCounter);
            });
            window.eleCounter++;
        }
    }

}


console.log(a);

function openCamera() {
    document.getElementById("fileInput").click();
    // var file = document.getElementById("fileInput");
    // document.addEventListener('DOMContentLoaded', function () {
    //     var fileInput = document.getElementById('fileInput');
    //     fileInput.addEventListener('change', function (e) {
    //         var file = e.target.files[0];
    //         // Do something with the image file.
    //         console.log(file);
    //         Tesseract.recognize(file)
    //             .progress(function (message) {
    //                 console.log(message);
    //             })
    //             .then(function (result) {
    //                 var contentArea = document.getElementById('document-content');
    //                 contentArea.innerHTML = result.text;
    //             })
    //             .catch(function (err) {
    //                 console.error(err);
    //             });
    //     });
    // });

}

function addList() {
    var butClicked = document.getElementById("addBut");
    var list = document.getElementById("accordion");
    var card = document.createElement("div");
    var cardH = document.createElement("div");
    var cardB = document.createElement("div");
    var dayCounter = document.createElement("p");
    var cardAn = document.createElement("a");
    var cardBody = document.createElement("div");
    var searchBut = document.createElement("button");
    var item = document.getElementById("foodName");
    var date = document.getElementById("date");
    var chkBox = document.createElement("input");
    var chkBoxDiv = document.createElement("div");
    var remBut = document.createElement("button");
    var id = "";
//    console.log(date.value);
//    console.log(ingList);
//    if (recogEx(ingList, item)) {
        card.setAttribute("class", "card");
        card.setAttribute("id", "#number" + window.eleCounter);
    
        cardH.setAttribute("class", "card-header");
    
        cardAn.setAttribute("class", "card-link");
        cardAn.setAttribute("data-toggle", "collapse");
        cardAn.setAttribute("href", "#collapse" + window.eleCounter);
        cardAn.innerHTML = item.value;
    
        dayCounter.innerHTML = "10 days left";
        dayCounter.setAttribute("class", "float-right"); 
    
        cardB.setAttribute("id", "collapse" + window.eleCounter);
        cardB.setAttribute("class", "collapse");
        cardB.setAttribute("data-parent", "#accordion");
    
        cardBody.setAttribute("class", "card-body");
        cardBody.innerHTML = "This ingredient will expire on " + "<b>" + date.value + "</b>";
    
        searchBut.setAttribute("onclick", "window.location.href = 'https://www.google.ca/search?q=" + item.value + " receipe'");
        searchBut.setAttribute("class", "btn btn-outline-dark");
        searchBut.setAttribute("type", "button");
        searchBut.innerHTML = "Search";
        searchBut.setAttribute("style", "margin: 2px;");
    
        chkBox.setAttribute("type", "checkbox");
        chkBox.setAttribute("id", "chkb" + window.eleCounter);
        chkBox.setAttribute("onclick", "searchhide()");
    
        chkBoxDiv.setAttribute("style", "margin: 15px; float: left;");
    
        remBut.setAttribute("class", "btn btn-outline-dark");
        remBut.setAttribute("type", "button");
        remBut.setAttribute("class", "btn btn-outline-dark");
        remBut.setAttribute("style", "margin: 2px;");
        remBut.innerHTML = "Remove";

//        console.log(ingList.id);
        console.log(window.eleCounter);
        // butClicked.addEventListener('click', function () {
        console.log(item);
        console.log(date);
//        let ref = db.collection("email").doc(sessionStorage.getItem("userEmail"));
//        ref.collection("list").add({
//                name: item.value,
//                expiaryDate: date.value
//            })
//            .then(function (docRef) {
//                console.log(docRef);
//                id = docRef.id;
//            });
//        id = '' + id;
//        remBut.addEventListener('click', function () {
//            rmEle(id, window.eleCounter);
//        });
    
        chkBoxDiv.appendChild(chkBox);
        cardH.appendChild(cardAn);
        cardH.appendChild(dayCounter);
        cardB.appendChild(cardBody);
        cardB.appendChild(searchBut);
        cardB.appendChild(remBut);
        card.appendChild(cardH);
        card.appendChild(cardB);
        list.appendChild(chkBoxDiv);
        list.appendChild(card);
        window.eleCounter++;
//    } else {
//        alert("Sorry, we are still adding more ingredients!");
//    }

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

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function rmEle(id, num) {
    var user2 = db.collection("email").doc(sessionStorage.getItem("userEmail"));
    console.log(id);
    console.log(user);
    console.log(num);
    user2.collection("list").doc(id).delete()
        .then(function (e) {

            var del = "number" + num;
            console.log(del);
            console.log(document.getElementById("number0"));
            document.getElementById("number0").remove();

        }).catch(function (e) {
            console.log(e);
        })
}

console.log(document.getElementById("number1"));

//Checkbox and search function
var search = document.getElementById("searchbut");

function searchhide() {
    search.style.display='block';
    
}


