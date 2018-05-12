let login = sessionStorage.getItem("userEmail");
console.log(login);
if(login !== null) {
    location.href="./indexLogined.html";
} else {
    location.href = "./index.html";
}