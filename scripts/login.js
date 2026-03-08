// console.log(document);
const signInCard = document.getElementById("signInCard");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");



function signInBtnFunc(id){
    // console.log(usernameInput.value);
    // console.log(passwordInput.value);

    if(usernameInput.value == 'admin' && passwordInput.value == 'admin123'){
        alert('Sign In Successful');
        window.location.assign('./main.html');
    }
    else{
        alert('Invalid Username or Password');
        return;
    }
}
