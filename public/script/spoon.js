/*var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1", 
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
    var listData = "testing";
    listData += response[0].id;
$("#recipe").append(listData);
    
});


var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/556470/information?includeNutrition=false",
  "method": "GET",
  "headers": {
    "X-Mashape-Key": "BRCCNUxTIWmshvCO6klV6Hi0HVFsp1AqP3wjsnHTd2TJd7xljC",
    "Accept": "application/json",
    "Cache-Control": "no-cache",
    "Postman-Token": "40fda88d-ab1a-42ea-8314-999f003203c0"
  }
}

$.ajax(settings2).done(function (response2) {
  console.log(response2);
    var listData ="Recipe <br/>"; 
    for(var key in response2["extendedIngredients"]) {
        listData += response2.extendedIngredients[key].originalString + "<br/>";

    } 
    listData +=  response2.title + "<br/>" 
    + response2.instructions;
    $("#recipe").append(listData);
});
*/