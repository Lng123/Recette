// // // var Tesseract = require('tesseract.js');
// // var myImage = document.createElement("img");
// // myImage.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/foodver-b888d.appspot.com/o/FB1.gif?alt=media&token=fa04169c-46af-43f2-b161-bd8281354234");
// // Tesseract.recognize(myImage)
// // .then(function(result){
// //     console.log(result)
// // })

// var img = new Image;
// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// var src = "https://firebasestorage.googleapis.com/v0/b/foodver-b888d.appspot.com/o/FB1.gif?alt=media&token=fa04169c-46af-43f2-b161-bd8281354234";

// img.crossOrigin = "Anonymous";

// img.onload = function() {
//   canvas.width = img.width;
//   canvas.height = img.height;
//   ctx.drawImage(img, 0, 0);


// }
// img.src = src;

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client
  .labelDetection('./resources/wakeupcat.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


 // get
 //querysnapshot = array of the ingredient
 //doc = one element of querysnapshot
 
db.collection("ingredient").get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      ingList.push(doc.data());
    });
  });


//Add
db.collection("email").add(
  { email: email.value }
)
  .then(function (docRef) {
    console.log("added!!" + docRef.id);
    sessionStorage.setItem("userEmail", docRef.id);
    email.value = "";
    alert("Welcome to Recette!!");
    userId = docRef.id;
    console.log(userId);
    window.location.href = "main.html"

  });