// console.log(document);
const signInCard = document.getElementById("signInCard");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
// 
const mainSection = document.getElementById("mainSection");

function signInBtnFunc(id){
    // console.log(usernameInput.value);
    // console.log(passwordInput.value);

    if(usernameInput.value === "admin" && passwordInput.value === "admin123"){
        // console.log("Bingo");
        signInCard.classList.add("hidden");
        mainSection.classList.remove("hidden");
    }
}