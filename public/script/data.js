let login = sessionStorage.getItem("userEmail");
let str = location.pathname;
let place = str.substring(str.length - 10, str.length);

if (login !== null && place !== "login.html") {

    location.href = "./login.html";

} else if (place === "index.html" && place !== "login.html") {

    console.log("true");

} else if (place == "login.html" && login !== null) {

    console.log("false");

} else {

    location.href = "./index.html";
}


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

function logout() {
    sessionStorage.clear();
    location.href = "./index.html";
}
// var ingredient = [
//     { name: "apple", time: 28 },
//     { name: "apricots", time: 3 },
//     { name: "avocado", time: 4 },
//     { name: "banana", time: 7 },
//     { name: "blueberry", time: 3 },
//     { name: "cantaloupe", time: 7 },
//     { name: "cherry", time: 3 },
//     { name: "coconut", time: 7 },
//     { name: "fig", time: 5 },
//     { name: "grapes", time: 5 },
//     { name: "honeydew", time: 7 },
//     { name: "kiwi", time: 14 },
//     { name: "lemon", time: 28 },
//     { name: "lime", time: 28 },
//     { name: "mango", time: 8 },
//     { name: "olive", time: 730 },
//     { name: "orange", time: 21 },
//     { name: "passion fruit", time: 30 },
//     { name: "peach", time: 4 },
//     { name: "pear", time: 4 },
//     { name: "pineapple", time: 3 },
//     { name: "pomegranate", time: 21 },
//     { name: "pumpkin", time: 90 },
//     { name: "strawberry", time: 7 },
//     { name: "tomato", time: 7 },
//     { name: "watermelon", time: 10 },
//     { name: "blackcurrant", time: 7 },
//     { name: "breadfruit", time: 4 },
//     { name: "carambola", time: 21 },
//     { name: "cherimoya", time: 3 },
//     { name: "kumquat", time: 7 },
//     { name: "lychee", time: 24 },
//     { name: "persimmon", time: 7 },
//     { name: "physais", time: 14 },
//     { name: "pitahaya", time: 7 },
//     { name: "pomelo", time: 1 },
//     {name: "patato", time:60},
//     {name: "artichoke", time:4},
//     {name: "eggplant", time:4},
//     {name: "asparagus", time:4},
//     {name: "legumes", time:4},
//     {name: "alfalfa sprouts", time:42},
//     {name: "bean sprouts", time:42},
//     {name: "soy beans", time:3},
//     {name: "chickpeas", time:3},
//     {name: "black beans", time:10},
//     {name: "black-eyed peas", time:4},
//     {name: "green beans", time:7},
//     {name:"kidney beans",time:4},,
//     {name:"lima beans", time:4},
//     {name:"kale", time:5},
//     {name:"broccoli", time: 5},
//     {name:"brussels sprouts", time:4},
//     {name:"bok choy", time:7},
//     {name:"chard", time:5},
//     {name:"anis seed", time:4},
//     {name:"spinach", time:7},
//     {name:"cliantro", time:14},    
//     {name:"cauliflower", time:7},
//     {name:"celery", time:2},
//     {name:"fiddleheads", time:21},
//     {name:"fennel", time:10},
//     {name:"greens", time:4},
//     {name:"kale", time:6},
//     {name:"mustard seed", time:480},
//     {name:"basil", time:150},
//     {name:"caraway seed", time:1095},
//     {name:"lemon grass", time:14},  
//     {name:"fennel", time:2},
//     {name:"lavender", time:3},
//     {name:"lemon Grass", time:14},
//     {name:"oregano", time:21},
//     {name:"sage", time:21},
//     {name:"thyme", time:21},
//     {name:"lettuce", time:8},
//     {name:"arugula", time:14},
//     {name:"mushrooms", time:7},
//     {name:"spinach", time:7},
//     {name:"onions", time:10},
//     {name:"Chives", time:21},
//     {name:"Garlic", time:30},
//     {name:"Leek", time:14},
//     {name:"parsley", time:14},
//     {name:"peppers", time:14},
//     {name:"onion", time:10},
//     {name:"chili pepper", time:5},
//     {name:"bell pepper", time:14},
//     {name:"Jalapeño", time:3},
//     {name:"Habanero", time:300},
//     {name:"Paprika", time:4},
//     {name:"Tabasco pepper", time:14},
//     {name:"Cayenne pepper", time:14},
//     {name:"radicchio", time:3},

//     {name:"root vegetables", time:5},
//     {name:"beet", time:21},
//     {name:"carrot", time:5},
//     {name:"celeriac", time:7},
//     {name:"daikon", time:14},
//     {name:"ginger", time:7},
//     {name:"parsnip", time:14},
//     {name:"rutabaga", time:5},
//     {name:"turnip", time:7},
//     {name:"wasabi paste", time:365},
//     {name:"horseradish", time:120},
//     {name:"radish", time:5},
//     {name:"corn", time:3},

//     {name:"squashes", time:6},
//     {name:"acorn squash", time:14},
//     {name:"bitter melon", time:4},
//     {name:"butternut squash", time:85},
//     {name:"banana squash", time:5},
//     {name:"cucumber", time:7},
//     {name:"Zucchini", time:6},
//     {name:"patty pans", time:4},
//     {name:"pumpkin", time:5},
//     {name:"spaghetti squash", time:5},
//     {name:"sunchokes", time:20},    
//     {name:"sweet potato", time:7},
//     {name:"water chestnut", time:7},
//     {name:"watercress", time:4},
//     {name:"yam", time:5},
// ];
// function addIng() {
//     for (let i = 0; i < ingredient.length; i++) {
//         db.collection("ingredient").add(
//             ingredient[i]
//         ).then(function(item) {
//             console.log(item);
//         }).catch(function(err) {
//             console.log(err);
//         });
//     }
// }
// addIng();

var invalid = true;

// Email log in verification

$('#email').on('input', function () {
    var input = $(this);
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var is_email = re.test(input.val());

    if (is_email) {
        input.removeClass("alert alert-danger").addClass("alert alert-success");
        $("#errorMsg").css({
            "display": "none"
        });
        $("#errorBlock").css({
            "display": "block"
        });
        invalid = false;
    } else {
        input.removeClass("alert alert-success").addClass("alert alert-danger");
        $("#errorMsg").html("please enter a valid email address");
        $("#errorMsg").css({
            "display": "block"
        });
        $("#errorBlock").css({
            "display": "none"
        });
        invalid = true;
    }
});

$('#email').keypress(function (e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
        $("#submit").click();
        return false;
    }
});

function clicked() {
    console.log(email.value);

    if (invalid) {
        return false;
    }

    let result = "no";

    for (let i = 0; i < userFile.length; i++) {
        if (userFile[i].data().email === email.value) {
            alert("Welcome back!");
            console.log(userFile[i].data());
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
        db.collection("email").add({
                email: email.value
            })
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
