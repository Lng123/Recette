/*
var data = JSON.parse(sessionStorage.getItem('farray'));
console.log(data);


var param = "";
    
for (var key in data){
    param += data[key].name + "%2C";
    }
console.log("?" + param);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" 
  + 
   param
   // apples%2Cflour%2Csugar 
  + "&limitLicense=false&number=5&ranking=1", 
  "method": "GET",
  "headers": {
    "X-Mashape-Key": "BRCCNUxTIWmshvCO6klV6Hi0HVFsp1AqP3wjsnHTd2TJd7xljC",
    "Accept": "application/json",
    "Cache-Control": "no-cache",
    "Postman-Token": "965a9953-bbb3-4e26-8323-85508ab699b9"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
    console.log(JSON.stringify(response));
    var listData = "testing";
        for(var key in response){
    var a = document.createElement("a");
    a.setAttribute("href","#");
    a.setAttribute("onclick", "sendId(this.id)");
    a.setAttribute("id", "" + response[key].id);
    a.innerHTML = response[key].title + "<br/>";
    $("#recipe").append(a);
    }

    
});

function sendId(clicked_id) {
    sessionStorage.setItem('foodId', clicked_id);
    var idparam = "storage" + sessionStorage.getItem('foodId');
    console.log(idparam);
    location.href = "page4.html";
    
};
*/