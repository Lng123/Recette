/*
var idparam = sessionStorage.getItem('foodId');
window.onload = function() {
    console.log(idparam);
}

var settings2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+ idparam +"/information?includeNutrition=false",
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
    var listData = "<h1>" + response2.title + " Recipe</h2><br/><img src = \"" 
    + response2.image + "\"><br/> <h2>Ingredients</h2>";
        
    for(var key in response2["extendedIngredients"]) {
        listData += response2.extendedIngredients[key].originalString + "<br/>";

    } 

    listData += "<h2>Instructions </h2>" + response2.instructions + "<br/>";
    $("#recipe").append(listData);
    
});
*/
