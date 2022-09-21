
function showError(errorElement, errorMessage) {
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display-error");
    }
}

function ValidateEmail(mail) 
{
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}


let form = document.forms['sign-up-form'];
form.onsubmit = function(event) {
    
    event.preventDefault();
    
    clearError();
    
    if(ValidateEmail(form.email.value) === false) {
        showError("email-error", "You have to enter your email");
        return false;
    }

    if(form.username.value === "") {
        showError("username-error", "You have to enter your username");
        return false;
    }

    if(form.password.value === "") {
        showError("password-error", "You have to enter your password");
        return false;
    }
    
    if(form['confirm-password'].value !== form.password.value) {
        showError("confirm-password-error", "Passwords don't match");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Your registration was successful.";
        
    
}
