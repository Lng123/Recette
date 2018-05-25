let login = sessionStorage.getItem("userEmail");
console.log(login);
if (login !== null) {
    console.log("Have id");
} else {
    location.href = "./index.html";
}
