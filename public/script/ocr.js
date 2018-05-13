var key = 'https://vision.googleapis.com/v1/images:annotate?key=' + window.apiKey;
var loadingDiv = document.getElementById('loading');

function uploadImage() {

  document.getElementById("fileInput").click();
  console.log("eneted uploadImage");

  var fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    loadingDiv.style.visibility = 'visible';
    // Do something with the image file.
    var reader = new FileReader();
    reader.onloadend = convertFile;
    reader.readAsDataURL(file);
  });
}

function convertFile(e) {
  console.log("eneted convertFile");

  var content = e.target.result;

  requestFile(content.replace('data:image/jpeg;base64,', ''));
}


function requestFile(content) {
  console.log("requestfile");
  var request = {
    requests: [{
      image: {
        content: content
      },
      features: [{
        type: "TEXT_DETECTION",
        maxResults: 200
      }]
    }]
  };

  $.post({
    url: key,
    data: JSON.stringify(request),
    contentType: 'application/json'
  }).fail(function (err) {
    console.log(err);
  }).done(function (data) {
    console.log(data.responses);
    searchList(data.responses);
    data.responses[0].textAnnotations
  });
}

function searchList(content) {
  let resIndex = [];
  let ingArr = getIngList();
  content[0].textAnnotations.shift();
  content[0].textAnnotations.map(function (item) {
    resIndex.push(item['description'].toUpperCase());
  });
  let result = [];
  for (let i = 0; i < resIndex.length; i++) {
    let temp = searchElement(resIndex[i]);
    if (temp !== null) {
      addLists(ingArr[temp]);

    }
  }

  console.log(result);
}

function searchElement(input) {
  let ingArr = getIngList();
  var temp = JSON.stringify(ingArr);
  var arr = JSON.parse(temp);
  var ingName = [];
  var index = arr.map(function (item) {
    ingName.push(item['name'].toUpperCase());
  });

  let result = null;
  for (let i = 0; i < ingName.length; i++) {
    let counter = input.length >= ingName[i].length ? input.length : ingName[i].length;
    let trueCounter = 0;
    // console.log(ingName[i]);
    let compareIng = ingName[i].split("");
    let compare = input.toUpperCase();
    compare = compare.split("");
    // console.log("compareIng: " + compareIng);
    // console.log("compareIng: " + compare);
    for (let j = 0; j < counter; j++) {
      if (compare[j] !== compareIng[j]) {
        trueCounter++;
      }
      else {
        console.log('right!');
      }
    }
    if (trueCounter <= 1) {
      console.log(compareIng);
      console.log(ingName[i]);
      result = i;
      break;
    }
  }
  return result;
}

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

Date.prototype.subtractDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() - days);
  return dat;
}

function addLists(input) {
  var dat = new Date();
  let dateDB = new Date(dat.addDays(input.time));
  let curDate = dat.addDays(input.time).toString().split(" ");
  curDate = curDate.slice(1, 4).join(" ");

  let dayLeft = dat.subtractDays(input.time).toString().split(" ");
  dayLeft = dayLeft[2];
  console.log(curDate);
  console.log(dayLeft);
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
  var container = document.createElement("div");
  var id = "";

  container.setAttribute("id", "#Cnumber" + window.eleCounter);
  card.setAttribute("class", "card");
  card.setAttribute("id", "#number" + window.eleCounter);


  cardH.setAttribute("class", "card-header");

  cardAn.setAttribute("class", "card-link");
  cardAn.setAttribute("data-toggle", "collapse");
  cardAn.setAttribute("href", "#collapse" + window.eleCounter);
  cardAn.innerHTML = input.name;
  cardAn.setAttribute("name", "foodValue");
  cardAn.style.fontSize = "18px";

  var daysLeft = calculateDayCount(new Date(), new Date(date.value));

  dayCounter.innerHTML = dayLeft + " days left";
  if (dayLeft <= 7) {
    dayCounter.style.color = "red";
  }

  dayCounter.style.fontSize = "18px";
  dayCounter.setAttribute("class", "float-right");

  cardB.setAttribute("id", "collapse" + window.eleCounter);
  cardB.setAttribute("class", "collapse");
  cardB.setAttribute("data-parent", "#accordion");

  cardBody.setAttribute("class", "card-body");
  cardBody.innerHTML = "This ingredient will expire on " + "<b>" + curDate + "</b>";

  chkBox.setAttribute("type", "checkbox");
  chkBox.setAttribute("id", "chkb" + window.eleCounter);
  chkBox.setAttribute("onclick", "searchhide()");
  chkBox.setAttribute("name", "chkbox" + window.eleCounter);
  chkBox.setAttribute("class", "chk");
  chkBoxDiv.setAttribute("style", "margin: 15px; float: left;");

  remBut.setAttribute("class", "btn btn-outline-dark");
  remBut.setAttribute("type", "button");
  remBut.setAttribute("class", "btn btn-outline-dark");
  remBut.setAttribute("style", "margin: 2px;");
  remBut.innerHTML = "Remove";

  console.log(window.eleCounter);

  let ref = db.collection("email").doc(sessionStorage.getItem("userEmail"));
  ref.collection("list").add(
    {
      name: input.name,
      expiaryDate: dateDB.getTime()
    }
  )
    .then(function (docRef) {
      console.log(docRef);
      id = docRef.id;
    });
  id = '' + id;

  remBut.addEventListener('click', function () {
    rmEle(id, container);
  });

  chkBoxDiv.appendChild(chkBox);
  cardH.appendChild(cardAn);
  cardH.appendChild(dayCounter);
  cardB.appendChild(cardBody);
  cardB.appendChild(remBut);
  card.appendChild(cardH);
  card.appendChild(cardB);
  container.appendChild(chkBoxDiv);
  container.appendChild(card);
  

  list.appendChild(container);
  window.eleCounter++;
  loadingDiv.style.visibility = 'hidden';
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