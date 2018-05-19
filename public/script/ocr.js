var key = 'https://vision.googleapis.com/v1/images:annotate?key=' + window.apiKey;
var loadingDiv = document.getElementById('loading');
var fileInput = document.getElementById('fileInput');
function uploadImage() {

  document.getElementById("fileInput").click();
  console.log("eneted uploadImage");
console.log(window.eleCounter);

  fileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    window.loadingDiv.style.visibility = 'visible';
    // Do something with the image file.
    var reader = new FileReader();
    console.log(reader);
    reader.onloadend = convertFile;
    reader.readAsDataURL(file);
  });
}

function convertFile(e) {
  console.log("eneted convertFile");

  var content = e.target.result;

  content = (/base64,(.+)/.exec(content)[1]);
  requestFile(content);

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
    fileInput.value = "";
  });
}

function searchList(content) {
  let resIndex = [];
  let ingArr = getIngList();
  let swt = true;
  content[0].textAnnotations.shift();
  content[0].textAnnotations.map(function (item) {
    resIndex.push(item['description'].toUpperCase());
  });
  for (let i = 0; i < resIndex.length; i++) {
    let temp = searchElement(resIndex[i]);

    if (temp !== null) {
      console.log(ingArr[temp]);
      addLists(ingArr[temp]);
      swt = false;
    }
  }
  if (swt) {
    window.loadingDiv.style.visibility = 'hidden';
  }

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

function addLists(input) {
  console.log(input);
  var dat = new Date();
  let dateDB = new Date(dat.addDays(input.time));
  let curDate = dat.addDays(input.time).toString().split(" ");
  curDate = curDate.slice(1, 4).join(" ");
  console.log(curDate);
  console.log(dayLeft);

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
  var dayCounter = document.createElement("p");
  var dayCounterButton = document.createElement("button");
  var dayCounterLabel = document.createElement("p");
  var id = "";

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
  cardAn.innerHTML = input.name;
  cardAn.setAttribute("name", "foodValue");
  cardAn.style.fontSize = "21px";
  console.log(input.time);
  var dayLeft = input.time;

  dayCounterButton.type = "button";
  dayCounterButton.style.float = "right";
  let val = parseInt(dayLeft);
  console.log(val);

  if (0 > val) {
    card.style.background = "linear-gradient(to right, #49959c , rgba(74, 79, 86, 0.7))";
    dayCounterButton.setAttribute("class", "btn btn-danger specialButton");
    console.log("eneter");
    dayCounter.innerHTML = dayLeft + "<br/>Days";
    cardAn.prepend(icon);
  }
  else if (dayLeft === "0") {
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
  cardBody.innerHTML = "This ingredient will expire on " + "<b>" + curDate + "</b>";

  chkBox.setAttribute("type", "checkbox");
  label.setAttribute("id", "chkb" + window.eleCounter);
  label.setAttribute("name", "chkbox" + window.eleCounter);
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

  console.log(input);
  var dat = new Date();

  let ref = db.collection("email").doc(sessionStorage.getItem("userEmail"));
  window.name = input.name;
  window.eleCounter++;
  ref.collection("list").add(
    {
      name: input.name,
      expiaryDate: dateDB.getTime()
    }
  )
    .then(function (docRef) {
      console.log(docRef);
      id = docRef.id;
      console.log(window.eleCounter);
      window.userList[window.eleCounter - 1] = (
        {
          name: window.name,
          expiaryDate: dateDB.getTime(),
          id: id,
        }
      );
      
    }).catch(function (err) {
      console.log(err);
    });
  id = '' + id;
  console.log(id);
console.log(window.userList);
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
  item.value = "";
  date.value = "";

  if_chk_checked();

  window.loadingDiv.style.visibility = 'hidden';
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