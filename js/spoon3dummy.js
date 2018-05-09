
var data = [{"id":487385,"title":"vrat wale aloo or vrat ke aloo , aloo for fasting","image":"https://spoonacular.com/recipeImages/487385-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":308},{"id":285930,"title":"Baked Potato Fans","image":"https://spoonacular.com/recipeImages/285930-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":76},{"id":698003,"title":"Sun-Dried Tomato Gnocchi","image":"https://spoonacular.com/recipeImages/698003-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":33},{"id":475775,"title":"Pesto Potato Salad with Tomatoes and Haricots Verts","image":"https://spoonacular.com/recipeImages/475775-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":8},{"id":696936,"title":"Tomato-Pesto Baked Potatoes","image":"https://spoonacular.com/recipeImages/696936-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":2}];


window.onload = function() { 
    console.log(data);
    var recipeDiv = document.getElementById("recipe");
    for(var key in data){
    var a = document.createElement("a");
    a.setAttribute("href","#");
    a.setAttribute("onclick", "sendId(this.id)");
    a.setAttribute("id", "" + data[key].id);
    a.innerHTML = data[key].title + "<br/>";
    recipeDiv.appendChild(a);
    }
    
    }

function sendId(clicked_id) {
    sessionStorage.setItem('foodId', clicked_id);
    var idparam = "storage" + sessionStorage.getItem('foodId');
    console.log(idparam);
    location.href = "page4.html";
    
};