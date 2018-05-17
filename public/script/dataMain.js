

$(document).ready(function () {

    /* remove item by checkbox function! */
    $("#trashButton").click(function () {
        var str;
        var index;
        var itemID;
        var checkedArray = [];

        // Determine which boxes are checked when remove button clicked
        $(":checked").each(function () {
            checkedArray.push($(this).parent().attr('id'));
        })

        for (var i = 0; i < checkedArray.length; i++) {
            str = "#Cnumber" + checkedArray[i].substr(4);
            index = checkedArray[i].substr(4);
            itemID = userList[index].id;

            let ele = $(str);

            rmEle(itemID, ele);

            chkbCounter--;
        }

        for (var i = 0; i < checkedArray.length; i++) {
            userList.splice(checkedArray[i], 1);
        }
        checkedArray = [];

        // Update Id numbers!
        var count = 0;
        $(':checkbox').each(function () {
            let chkbIdName = "chkb" + count;
            let cnumberIdName = "Cnumber" + count;
            let chkbName = "chkbox" + count;
            let cardID = "number" + count;

            //update checkbox ID
            $(this).parent().removeAttr('id');
            $(this).parent().attr('id', chkbIdName);

            //update checkbox name attribute
            $(this).parent().removeAttr('name');
            $(this).parent().attr('name', chkbName);

            //update Cnumber ID
            $(this).parent().parent().parent().removeAttr('id');
            $(this).parent().parent().parent().attr('id', cnumberIdName);

            //update card ID
            $(this).parent().parent().siblings().removeAttr('id');
            $(this).parent().parent().siblings().attr('id', cardID);

            count++;
        })

        $(".chkDiv").toggleClass('hidden');
        $('#searchbut').addClass('hidden');
        $('#trashButton').addClass('hidden');
        $('#selectAll').addClass('hidden');
    })
})


let login = sessionStorage.getItem("userEmail");
var loadingDiv = document.getElementById('loading');

if (login !== null) {
    console.log("Successful Login");
} else {
    location.href = "./index.html";
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsDdSSCShjFlNOt1hTdcMbxisH1BSPgDE",
    authDomain: "recette-f3ef5.firebaseapp.com",
    databaseURL: "https://recette-f3ef5.firebaseio.com",
    projectId: "recette-f3ef5",
    storageBucket: "gs://recette-f3ef5.appspot.com",
    messagingSenderId: "242135902717"
};

firebase.initializeApp(config);
var db = firebase.firestore();
var functions = firebase.functions();


var camBut = document.getElementById("camera");
var eleCounter = 0;
var chkbCounter = 0;
var a = sessionStorage.getItem("userEmail");
var ingList = [];
var userList = [];
var user = db.collection("email").doc(sessionStorage.getItem("userEmail"));

db.collection("ingredient").get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            ingList.push(doc.data());
        });
    });

window.ingListW = ingList;
window.loadingDiv.style.visibility = 'visible';
user.collection("list").orderBy("expiaryDate", "asc").get()
    .then(function (querySnapshot) {
        if (querySnapshot !== null) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots

                userList.push({
                    name: doc.data().name,
                    expiaryDate: doc.data().expiaryDate,
                    id: doc.id
                });
            });

            console.log(loadingDiv.style.visibility);
            showList();
            window.loadingDiv.style.visibility = 'hidden';
        }
    });

function showList() {

    if (userList.length !== 0) {
        console.log(userList);

        for (let i = 0; i < userList.length; i++) {

            var dat = new Date(userList[i].expiaryDate);


            console.log(dat);
            var today = new Date();

            let expDate = dat.toString().split(" ");
            expDate = expDate.slice(1, 4).join(" ");

            let dayLeft = dat.subtractDays(today).toString().split(" ");
            console.log(dayLeft);
            dayLeft = dayLeft[2];

            var list = document.getElementById("accordion");
            var card = document.createElement("div");
            var cardH = document.createElement("div");
            var cardB = document.createElement("div");
            var cardAn = document.createElement("a");
            var cardBody = document.createElement("div");
            var chkBox = document.createElement("input");
            var chkBoxDiv = document.createElement("div");
            var box = document.createElement("i");
            var boxChecked = document.createElement("i");
            var label = document.createElement("label");
            var remBut = document.createElement("button");
            var dayCounter = document.createElement("p");
            var dayCounterButton = document.createElement("button");
            var dayCounterLabel = document.createElement("p");
            var container = document.createElement("div");
            var remImg = document.createElement("img");
            var icon = document.createElement("i");


            container.setAttribute("id", "Cnumber" + window.eleCounter);
            container.setAttribute("class", "CClass");
            card.setAttribute("class", "card");
            card.setAttribute("id", "number" + window.eleCounter);
            card.setAttribute("data-toggle", "collapse");
            card.setAttribute("href", "#collapse" + window.eleCounter);

            cardH.setAttribute("class", "card-header");
            cardAn.setAttribute("class", "card-link");
            cardAn.setAttribute("data-toggle", "collapse");
            cardAn.setAttribute("href", "#collapse" + window.eleCounter);
            cardAn.innerHTML = window.userList[i].name;
            cardAn.style.fontSize = "21px";
            cardAn.name = "foodValue";
            icon.setAttribute("class", "fas fa-exclamation-triangle");
            icon.style.marginRight = "5px";
            // dayCounter.innerHTML = dayLeft + " days left";
            // dayCounter.style.float = "right";
            // dayCounter.style.fontSize = "18px";

            // if (dayLeft <= 7) {
            //     dayCounter.style.color = "red"
            // }

            dayCounterButton.type = "button";
            dayCounterButton.style.float = "right";

            if (dayLeft < 0) {

                card.style.background = "linear-gradient(to right, #49959c , rgba(74, 79, 86, 0.7))";
                dayCounterButton.setAttribute("class", "btn btn-danger specialButton");
                dayCounter.innerHTML = dayLeft + "<br/>Days";
                cardAn.prepend(icon);
            }
            if (dayLeft === "0") {
                dayCounterButton.setAttribute("class", "btn btn-danger specialButton");
                dayCounterButton.innerHTML = "Last<br/>today";
                dayCounterButton.style.fontSize = "16px";
                cardAn.prepend(icon);
            } else if (dayLeft < 7) {
                //food will expire soon
                dayCounterButton.setAttribute("class", "btn btn-warning specialButton");
                dayCounter.innerHTML = dayLeft + "<br/>Days";
            } else {
                // food is expired
                dayCounterButton.setAttribute("class", "btn btn-primary specialButton");
                dayCounter.innerHTML = dayLeft + "<br/>Days";

            }

            dayCounter.style.margin = "0px";


            dayCounterLabel.style.fontSize = "12px";
            dayCounterLabel.style.margin = "0px";

            cardB.setAttribute("id", "collapse" + window.eleCounter);
            cardB.setAttribute("class", "collapse");
            cardB.setAttribute("data-parent", "#accordion");

            cardBody.setAttribute("class", "card-body");
            cardBody.innerHTML = "The ingredients will expire on " + "<b>" + expDate + "</b>";

            chkBox.setAttribute("type", "checkbox");
            label.setAttribute("id", "chkb" + window.chkbCounter);
            label.setAttribute("name", "chkbox" + window.chkbCounter);
            chkBox.setAttribute("class", "chk");
            chkBoxDiv.setAttribute("class", "chkDiv");
            chkBoxDiv.classList.add("hidden");
            chkBoxDiv.setAttribute("style", "float: left;");

            label.classList.add("btn");
            label.classList.add("chkbLabel");

            box.classList.add("far");
            box.classList.add("fa-square");
            box.classList.add("box");

            boxChecked.classList.add("fas");
            boxChecked.classList.add("fa-check-square");
            boxChecked.classList.add("boxChecked");

            remBut.setAttribute("class", "btn btn-outline-light");
            remBut.setAttribute("type", "button");
            remImg.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/src%2Fbaseline_delete_white_18dp.png?alt=media&token=32867197-c5a3-4950-b922-fe4f26c787cf");
            remImg.setAttribute("id", "rmImg");

            let detId = "#Cnumber" + window.eleCounter;
            let delCon = container;
            remBut.addEventListener('click', function () {
                rmEle(userList[i].id, delCon);
            });

            label.appendChild(chkBox);
            label.appendChild(box);
            label.appendChild(boxChecked);
            chkBoxDiv.appendChild(label);
            cardH.appendChild(cardAn);
            dayCounterButton.appendChild(dayCounter);
            dayCounterButton.appendChild(dayCounterLabel);
            cardH.appendChild(dayCounterButton);
            cardB.appendChild(cardBody);
            card.appendChild(cardH);
            card.appendChild(cardB);
            container.appendChild(chkBoxDiv);
            container.appendChild(card);

            list.appendChild(container);


            window.eleCounter++;
            window.chkbCounter++;
        }
        if_chk_checked();
        allChk();
    }


}


function addList() {
    var butClicked = document.getElementById("addBut");
    var list = document.getElementById("accordion");
    var card = document.createElement("div");
    var cardH = document.createElement("div");
    var cardB = document.createElement("div");
    var dayCounter = document.createElement("p");
    var dayCounterLabel = document.createElement("p");
    var dayCounterButton = document.createElement("button");
    var cardAn = document.createElement("a");
    var cardBody = document.createElement("div");
    var item = document.getElementById("foodName");
    var date = document.getElementById("date");
    var chkBox = document.createElement("input");
    var chkBoxDiv = document.createElement("div");
    var label = document.createElement("label");
    var box = document.createElement("i");
    var boxChecked = document.createElement("i");
    var remBut = document.createElement("button");
    var container = document.createElement("div");
    var id = "";

    if (recogEx(ingList, item)) {
        container.setAttribute("id", "Cnumber" + window.eleCounter);
        container.setAttribute("class", "CClass");

        card.setAttribute("class", "card");
        card.setAttribute("id", "number" + window.eleCounter);

        cardH.setAttribute("class", "card-header");

        cardAn.setAttribute("class", "card-link");
        cardAn.setAttribute("data-toggle", "collapse");
        cardAn.setAttribute("href", "#collapse" + window.eleCounter);
        cardAn.innerHTML = item.value;
        cardAn.setAttribute("name", "foodValue");
        cardAn.style.fontSize = "21px";

        var daysLeft = calculateDayCount(new Date(), new Date(date.value));
        dayCounterButton.type = "button";
        dayCounterButton.style.float = "right";
        if (daysLeft < 0) {
            card.style.background = "linear-gradient(to right, #49959c , rgba(74, 79, 86, 0.7))";
        }
        if (daysLeft > 7) {
            dayCounterButton.setAttribute("class", "btn btn-primary specialButton");
        } else if (daysLeft <= 7) {
            //food will expire soon
            dayCounterButton.setAttribute("class", "btn btn-warning specialButton");
        } else {
            // food is expired
            dayCounterButton.setAttribute("class", "btn btn-danger specialButton");
        }

        dayCounter.innerHTML = daysLeft;
        // dayCounter.style.fontSize = "21px";
        dayCounter.style.margin = "0px";

        dayCounterLabel.innerHTML = "Days";
        dayCounterLabel.style.fontSize = "12px";
        dayCounterLabel.style.margin = "0px";


        // dayCounter.innerHTML = daysLeft + " days left";

        // if (daysLeft <= 7) {
        //     dayCounter.style.color = "red";
        // }

        cardB.setAttribute("id", "collapse" + window.eleCounter);
        cardB.setAttribute("class", "collapse");
        cardB.setAttribute("data-parent", "#accordion");

        cardBody.setAttribute("class", "card-body");
        cardBody.innerHTML = "This ingredient will expire on " + "<b>" + formatDate(date.value) + "</b>";

        chkBox.setAttribute("type", "checkbox");
        label.setAttribute("id", "chkb" + window.chkbCounter);
        label.setAttribute("name", "chkbox" + window.chkbCounter);
        chkBox.setAttribute("class", "chk");
        chkBoxDiv.setAttribute("class", "chkDiv");
        chkBoxDiv.classList.add("hidden");
        chkBoxDiv.setAttribute("style", "float: left;");

        label.classList.add("btn");
        label.classList.add("chkbLabel");

        box.classList.add("far");
        box.classList.add("fa-square");
        box.classList.add("box");

        boxChecked.classList.add("fas");
        boxChecked.classList.add("fa-check-square");
        boxChecked.classList.add("boxChecked");

        remBut.setAttribute("class", "btn btn-outline-dark");
        remBut.setAttribute("type", "button");
        remBut.setAttribute("style", "margin: 2px;");
        remBut.innerHTML = "Remove";

        var dat = new Date();
        let dateDB = new Date(date.value);
        let ref = db.collection("email").doc(sessionStorage.getItem("userEmail"));
        ref.collection("list").add(
            {
                name: item.value,
                expiaryDate: dateDB.getTime()
            }
        )
            .then(function (docRef) {
                console.log(docRef);
                id = docRef.id;
                userList[window.chkbCounter - 1] = (
                    {
                        name: window.name,
                        expiaryDate: dateDB.getTime(),
                        id: id,
                    }
                );
                console.log(userList);
            });
        id = '' + id;
        console.log(id);

        let delCon = container;
        remBut.addEventListener('click', function () {
            rmEle(id, delCon);
        });

        label.appendChild(chkBox);
        label.appendChild(box);
        label.appendChild(boxChecked);
        chkBoxDiv.appendChild(label);
        cardH.appendChild(cardAn);
        dayCounterButton.appendChild(dayCounter);
        dayCounterButton.appendChild(dayCounterLabel);
        cardH.appendChild(dayCounterButton);
        cardB.appendChild(cardBody);
        card.appendChild(cardH);
        card.appendChild(cardB);
        container.appendChild(chkBoxDiv);
        container.appendChild(card);


        list.appendChild(container);
        window.eleCounter++;
        window.chkbCounter++;
        item.value = "";
        date.value = "";

        if_chk_checked();
        allChk();

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
    // console.log(list);
    console.log(item.value);
    for (let i = 0; i < list.length; i++) {
        if (item.value === list[i].name) {
            console.log("true" + item2);
            result = true;
        }
    };
    console.log(result);
    return result;
}

function rmEle(id, num) {
    var user2 = db.collection("email").doc(sessionStorage.getItem("userEmail"));
    console.log(id);
    console.log(user);
    console.log(num);

    num.remove();

    user2.collection("list").doc(id).delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
}

// var checkedArray = [];
//searching functions
function if_chk_checked() {

    $(":checkbox").change(function () {

        if ($(":checked").length > 0) {
            $('#searchbut').removeClass('hidden');
            $('#trashButton').removeClass('hidden');
        } else {
            $('#searchbut').addClass('hidden');
            $('#trashButton').addClass('hidden');
        }
    })

}


var sbut = document.getElementById("searchbut");

function searchapi() {
    var foodArray = [];
    var checkb = document.getElementsByClassName("chk");
    var fname = document.getElementsByName("foodValue");
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
            // console.log(arr[i]);
            if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].name.substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
                let timeB = arr[i].time;
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    // inp.value = this.getElementsByTagName("input")[0].name;
                    console.log(this.getElementsByTagName("input"));
                    inp.value = this.getElementsByTagName("input")[0].value;
                    let time = document.getElementById("date");
                    let timeInp = new Date().addDays(timeB);
                    timeInp = timeInp.toISOString();
                    console.log(timeInp);
                    time.value = timeInp;

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

autocomplete(document.getElementById("foodName"), ingList);

//ingList accessor
function getIngList() {
    return ingList;
}

// Date Converter
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

Date.prototype.subtractDays = function (days) {
    var dat = new Date(this.valueOf());
    if (dat.getDate() === days.getDate()
        && dat.getMonth() === dat.getMonth()) {
        return "/ / 0";
    } else if (dat.getTime() < days.getTime()) {
        console.log("dat: " + dat.getDate());
        console.log("daYS: " + days.getDate());
        console.log("past");
        return "/ / " + (dat.getDay() - days.getDay());
    }
    dat.setDate(dat.getDate() - days.getDate());
    return dat;
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

Date.prototype.toISOString = function () {
    return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate());

};

function formatDate(date) {
    var inputDate = new Date(date);
    var inputDateArray = inputDate.toString().split(" ");
    return inputDateArray.splice(1, 3).join(" ");
}

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}


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


function allChk() {
    var clicks = 0

    $('#selectAll').click(function () {
        if (clicks == 0 || clicks % 2 == 0) {
            $(':checkbox').prop('checked', true);
            $('#searchbut').removeClass('hidden');
            $('#trashButton').removeClass('hidden');
        } else {
            $(':checked').prop('checked', false);
            $('#searchbut').addClass('hidden');
            $('#trashButton').addClass('hidden');

        }
        clicks++;
    });

}