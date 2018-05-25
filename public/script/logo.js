var count = 0;
var logoDiv = document.getElementById("logo");
var logo = document.createElement("img");
var bcit = document.createElement("img");
(function () {
    count = 0;
    logo.setAttribute("alt", "logo");
    logo.setAttribute("onclick", "easter()");
    logo.src = "https://firebasestorage.googleapis.com/v0/b/foodver-b888d.appspot.com/o/Logo.png?alt=media&token=37c7a512-6612-44ed-88ff-f81fbc60385b";

    logoDiv.appendChild(bcit);
    logoDiv.appendChild(logo);

})();

window.onload = function () {
    bcit.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/src%2Fbcit.png?alt=media&token=6ab554aa-225a-4150-9d65-56318efd33df";
    bcit.style.width = "130px";
    bcit.style.height = "auto";
    bcit.style.position = "relative";
    bcit.style.zIndex = "-1";
    bcit.style.top = "160px";
}

function easter() {
    count++;
    console.log(count);

    if (count > 9) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo2.png?alt=media&token=24e9ae45-eba4-49d4-8f13-a9f272ea15ee";

    }
    if (count > 10) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo3.png?alt=media&token=39e40bfc-0a72-42b4-9dd6-479226bf4cd4";
    }
    if (count > 11) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo4.png?alt=media&token=4c3731a5-3a4e-408e-b59f-ed685bd8a064";
    }
    if (count > 12) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo5.png?alt=media&token=cecdb12f-ecba-4fe4-8d72-a0c498760b89";
    }
    if (count > 13) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo6.png?alt=media&token=6977518d-40ee-4292-9d96-834802f64746";
    }
    if (count > 14) {
        logo.src = "https://firebasestorage.googleapis.com/v0/b/recette-f3ef5.appspot.com/o/recipe%2FLogo7.png?alt=media&token=1e55a472-a7f8-4d48-ae00-4156cc887672";
    }

    if (count > 15) {
        logo.style.visibility = "hidden";
    }
}
