var recipejson = {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 2,
    "gaps": "no",
    "lowFodmap": true,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 10,
    "cookingMinutes": 60,
    "sourceUrl": "http://www.kraftrecipes.com/recipes/baked-potato-fans-75751.aspx",
    "spoonacularSourceUrl": "https://spoonacular.com/baked-potato-fans-285930",
    "aggregateLikes": 76,
    "spoonacularScore": 86,
    "healthScore": 22,
    "creditText": "Kraft Recipes",
    "sourceName": "Kraft Recipes",
    "pricePerServing": 65.16,
    "extendedIngredients": [{
        "id": 11353,
        "aisle": "Produce",
        "image": "russet-or-Idaho-potatoes.jpg",
        "consitency": "solid",
        "name": "baking potatoes",
        "original": "4 small baking potatoes (1-1/2 lb.)",
        "originalString": "4 small baking potatoes (1-1/2 lb.)",
        "originalName": null,
        "amount": 1,
        "unit": "lb",
        "meta": ["small"],
        "metaInformation": ["small"],
        "measures": {
            "us": {
                "amount": 1,
                "unitShort": "lb",
                "unitLong": "pound"
            },
            "metric": {
                "amount": 453.592,
                "unitShort": "g",
                "unitLong": "grams"
            }
        }
    }, {
        "id": 1033,
        "aisle": "Cheese",
        "image": "parmesan.jpg",
        "consitency": "solid",
        "name": "parmesan cheese",
        "original": "2 Tbsp. KRAFT Shredded Parmesan Cheese",
        "originalString": "2 Tbsp. KRAFT Shredded Parmesan Cheese",
        "originalName": null,
        "amount": 2,
        "unit": "Tbsp",
        "meta": ["shredded", "kraft"],
        "metaInformation": ["shredded", "kraft"],
        "measures": {
            "us": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
            },
            "metric": {
                "amount": 2,
                "unitShort": "Tbsps",
                "unitLong": "Tbsps"
            }
        }
    }, {
        "id": 11955,
        "aisle": "Canned and Jarred;Produce",
        "image": "sundried-tomatoes.png",
        "consitency": "solid",
        "name": "sun dried tomato",
        "original": "1/4 cup KRAFT Sun Dried Tomato Vinaigrette Dressing",
        "originalString": "1/4 cup KRAFT Sun Dried Tomato Vinaigrette Dressing",
        "originalName": null,
        "amount": 0.25,
        "unit": "cup",
        "meta": ["dried", "kraft"],
        "metaInformation": ["dried", "kraft"],
        "measures": {
            "us": {
                "amount": 0.25,
                "unitShort": "cups",
                "unitLong": "cups"
            },
            "metric": {
                "amount": 59.147,
                "unitShort": "g",
                "unitLong": "grams"
            }
        }
    }],
    "id": 285930,
    "title": "Baked Potato Fans",
    "readyInMinutes": 70,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/285930-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": ["side dish"],
    "diets": ["gluten free", "fodmap friendly"],
    "occasions": [],
    "winePairing": {
        "pairedWines": [],
        "pairingText": "",
        "productMatches": []
    },
    "instructions": "Heat oven to 375F.                                            Make 6 to 8 diagonal cuts in top of each potato, being careful not to cut through to bottom of potato.                                             Place potatoes on baking sheet sprayed with cooking spray.  Spread potato slices apart slightly with your hand while drizzling 1 Tbsp. dressing over each potato.                                             Bake 1 hour or until done.   Sprinkle with cheese.",
    "analyzedInstructions": [{
        "name": "",
        "steps": [{
            "number": 1,
            "step": "Heat oven to 375F.",
            "ingredients": [],
            "equipment": [{
                "id": 404784,
                "name": "oven",
                "image": "oven.jpg",
                "temperature": {
                    "number": 375,
                    "unit": "Fahrenheit"
                }
            }]
        }, {
            "number": 2,
            "step": "Make 6 to 8 diagonal cuts in top of each potato, being careful not to cut through to bottom of potato.",
            "ingredients": [],
            "equipment": []
        }, {
            "number": 3,
            "step": "Place potatoes on baking sheet sprayed with cooking spray.",
            "ingredients": [],
            "equipment": [{
                "id": 404727,
                "name": "baking sheet",
                "image": "baking-sheet.jpg"
            }]
        }, {
            "number": 4,
            "step": "Spread potato slices apart slightly with your hand while drizzling 1 Tbsp. dressing over each potato.",
            "ingredients": [],
            "equipment": []
        }, {
            "number": 5,
            "step": "Bake 1 hour or until done.   Sprinkle with cheese.",
            "ingredients": [],
            "equipment": []
        }]
    }],
    "creditsText": "Kraft Recipes"
};

window.onload = function () {
    console.log(recipejson);
    var listData = "<h1>" + recipejson.title + " Recipe</h2><br/><img src = \"" +
        recipejson.image + "\"><br/> <h2>Ingredients</h2>";

    for (var key in recipejson["extendedIngredients"]) {
        listData += recipejson.extendedIngredients[key].originalString + "<br/>";

    }

    listData += "<h2>Instructions </h2>" + recipejson.instructions + "<br/>";
    $("#recipe").append(listData);
}
