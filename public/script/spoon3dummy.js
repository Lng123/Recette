
var data = [{"id":487385,"title":"vrat wale aloo or vrat ke aloo , aloo for fasting","image":"https://spoonacular.com/recipeImages/487385-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":308},{"id":285930,"title":"Baked Potato Fans","image":"https://spoonacular.com/recipeImages/285930-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":76},{"id":698003,"title":"Sun-Dried Tomato Gnocchi","image":"https://spoonacular.com/recipeImages/698003-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":33},{"id":475775,"title":"Pesto Potato Salad with Tomatoes and Haricots Verts","image":"https://spoonacular.com/recipeImages/475775-312x231.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":1,"likes":8}];


window.onload = function() { 
    console.log(data);
    var car = document.getElementById("car");
    var first = true;
    for(var key in data){
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
    item.setAttribute("id", "" + data[key].id);
    title.innerHTML = data[key].title   ;
    img.setAttribute("src", "" +data[key].image );
    img.style.width ="100%";
    img.style.height="auto";
    item.appendChild(img);
    item.appendChild(title);
    car.appendChild(item);

    }
    
    }

function sendId(clicked_id) {
    sessionStorage.setItem('foodId', clicked_id);
    var idparam = "storage" + sessionStorage.getItem('foodId');
    console.log(idparam);
    location.href = "page4.html";
    
};