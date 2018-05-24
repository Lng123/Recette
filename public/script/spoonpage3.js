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
   // format : apples%2Cflour%2Csugar 
  + "&limitLicense=false&number=4&ranking=1", 
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
    
    var car = document.getElementById("car");
    var first = true;
    for(var key in response){
    var item = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("h1");
    if (first) {
            item.setAttribute("class","carousel-item active");
            first = false;
    }else{
    item.setAttribute("class","carousel-item");
        }
    item.setAttribute("href","#");
    item.setAttribute("onclick", "sendId(this.id)");
    item.setAttribute("id", "" + response[key].id);
    title.innerHTML = response[key].title   ;
    img.setAttribute("src", "" + response[key].image );
    img.style.width ="100%";
    img.style.height="auto";
    item.appendChild(img);
    item.appendChild(title);
    car.appendChild(item);

    }
        
    
});

function sendId(clicked_id) {
    sessionStorage.setItem('foodId', clicked_id);
    var idparam = "storage" + sessionStorage.getItem('foodId');
    console.log(idparam);
    location.href = "page4.html";
    
};
*/