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

//test ingredient list
var ingList = [
    {
        name: "potato",
        time: 30
    },
    {
        name: "cucumber",
        time: 20
    },
    {
        name: "apple",
        time: 20
    },
    {
        name: "lettuce",
        time: 20
    },
    {
        name: "pickle",
        time: 20
    },
    {
        name: "celery",
        time: 20
    },
    {
        name: "pear",
        time: 20
    },
    {
        name: "cherry",
        time: 20
    },
    {
        name: "avocado",
        time: 20
    },
    {
        name: "cabbage",
        time: 20
    },
    {
        name: "figs",
        time: 20
    },
    {
        name: "tomato",
        time: 20
    },
    {
        name: "eggplant",
        time: 20
    },
    {
        name: "cucumber",
        time: 20
    },
    {
        name: "onion",
        time: 20
    },
    {
        name: "milk",
        time: 20
    },
    {
        name: "beef",
        time: 20
    },
    {
        name: "pork",
        time: 20
    },
    {
        name: "greenbeans",
        time: 20
    },
    {
        name: "edamame",
        time: 20
    },
    {
        name: "starfruit",
        time: 20
    },
    {
        name: "jackfruit",
        time: 20
    },
    {
        name: "banana",
        time: 20
    },
    {
        name: "broccoli",
        time: 20
    },
    {
        name: "brusselsprouts",
        time: 20
    },
    {
        name: "leek",
        time: 20
    },
];

var ingString = JSON.stringify(ingList);
var userList = JSON.parse(ingString);

console.log(userList[3].name);

showList();

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
            var chkBoxDiv = document.createElement("div");
            var remBut = document.createElement("button");
            var dayCounter = document.createElement("p");

            card.setAttribute("class", "card");
            card.setAttribute("id", "#number" + window.eleCounter);
            card.setAttribute("style", "margin: 5px;");

            cardH.setAttribute("class", "card-header");

            cardAn.setAttribute("class", "card-link");
            cardAn.setAttribute("data-toggle", "collapse");
            cardAn.setAttribute("href", "#collapse" + window.eleCounter);
            cardAn.innerHTML = window.userList[i].name;
            cardAn.style.fontSize = "18px";
            cardAn.name = "foodValue";
            
            dayCounter.innerHTML = window.userList[i].time + " days left";
            dayCounter.style.float = "right";
            dayCounter.style.fontSize = "18px";
            if (userList[i].time <= 7) {
                dayCounter.style.color = "red"
            }

            cardB.setAttribute("id", "collapse" + window.eleCounter);
            cardB.setAttribute("class", "collapse");
            cardB.setAttribute("data-parent", "#accordion");

            cardBody.setAttribute("class", "card-body");
            cardBody.innerHTML = "The ingredients will expire on " + "<b>" + userList[i].expiaryDate + "</b>";

            searchBut.setAttribute("type", "button");
            searchBut.innerHTML = "search";

            chkBox.setAttribute("type", "checkbox");
            chkBox.setAttribute("id", "chkb");

            chkBoxDiv.setAttribute("style", "margin: 15px; float: left;");

            remBut.setAttribute("class", "btn btn-outline-dark");
            remBut.setAttribute("type", "button");
            remBut.innerHTML = "Remove";
            console.log(userList[i]);

            console.log(document.getElementById("number0"));
            cardH.appendChild(cardAn);
            cardH.appendChild(dayCounter);
            cardB.appendChild(cardBody);
            cardB.appendChild(remBut);
            card.appendChild(cardH);
            card.appendChild(cardB);
            chkBoxDiv.appendChild(chkBox);
            list.appendChild(chkBoxDiv);
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
    card.setAttribute("style", "margin: 5px;");

    cardH.setAttribute("class", "card-header");

    cardAn.setAttribute("class", "card-link");
    cardAn.setAttribute("data-toggle", "collapse");
    cardAn.setAttribute("href", "#collapse" + window.eleCounter);
    cardAn.innerHTML = item.value;
    cardAn.setAttribute("name", "foodvalue");
    cardAn.style.fontSize = "18px";

    var daysLeft = calculateDayCount(new Date(), new Date(date.value));

    dayCounter.innerHTML = daysLeft + " days left";
    if (daysLeft <= 7) {
        dayCounter.style.color = "red";
    }
    dayCounter.style.fontSize = "18px";
    dayCounter.innerHTML = "10 days left";
    dayCounter.setAttribute("class", "float-right");

    cardB.setAttribute("id", "collapse" + window.eleCounter);
    cardB.setAttribute("class", "collapse");
    cardB.setAttribute("data-parent", "#accordion");

    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = "This ingredient will expire on " + "<b>" + date.value + "</b>";

    chkBox.setAttribute("type", "checkbox");
    chkBox.setAttribute("id", "chkb" + window.eleCounter);
    chkBox.setAttribute("onclick", "searchhide()");
    chkBox.setAttribute("name", "chkbox" + window.eleCounter);

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


function searchhide() {
    var search = document.getElementById("searchbut");
    var checkb = document.getElementsByName("chkbox");
    search.style.display = 'none';
    checkb.addEventListener('change', function() {
        console.log("enetered chkbox change");
        for (var i = 0; i < window.eleCounter; i++) {
        if (checkb[i].checked) {
            console.log("number" + i);
            console.log(checkb[i].checked);
            search.style.display = 'block';
        }

    }
    });
    
}

var sbut = document.getElementById("searchbut");

function searchapi() {
    var foodArray = [];
    var checkb = document.getElementsByName("chkbox");
    var fname = document.getElementsByName("foodvalue");
    for (var i = 0; i < window.eleCounter; i++) {
        if (checkb[i].checked) {
            console.log("number" + i);
            console.log(fname[i].innerText);
            foodArray.push({ name: fname[i].innerText });
        }
        console.log(foodArray);
        sessionStorage.setItem('farray', JSON.stringify(foodArray));
        location.href = "page3.html";
    }
}

/*        
var data = JSON.parse(sessionStorage.getItem('farray'));
console.log(data);
console.log(data[0]);


var param = "";
    
for (var key in data){
    param += data[key].name + "%2C";
        }
    console.log("?" + param);
*/

//calculates days left from input expiration date
function calculateDayCount(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1 = date1.getTime();
    var date2 = date2.getTime();

    // Calculate the difference in milliseconds
    var difference = Math.abs(date2 - date1);

    // Convert back to days and return
    return Math.round(difference / one_day);
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

//returns future date based on input days
//function calculateFutureDate(days) {
//    var dat = new Date(this.valueOf());
//    dat.setDate(dat.getDate() + days);
//    return dat;
//}

/*An array containing all the country names in the world:*/
var foodSuggestions = ["Apple", "Banana", "Carrot", "Dates", "Eggplant", "Grapes", "Apricot", "Cherry"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("foodName"), foodSuggestions);




