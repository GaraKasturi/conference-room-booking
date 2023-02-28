let userName = document.getElementById("username")
let userPassword=document.getElementById("userPassword")
let form = document.getElementById("logInForm")
let mailErrText= document.getElementById("mailErr")
let passwordErrText= document.getElementById("passwordErr")
let result=document.getElementById("res")
let usernamePasswordErrorText = document.getElementById("usernamePassword")

let userName1="abc@gmail.com"
let password1="Abc@1234"

let userName2="def@gmail.com"
let password2="def@1234"

userName.addEventListener("blur", function(event){
    
    if (event.target.value === ""){
        mailErrText.textContent="*Required"
        mailErrText.style.color="red"
        mailErrText.style.fontSize="12px"
        mailErrText.style.fontFamily="roboto"
    }
    else{
        mailErrText.textContent=""
    }
})

userPassword.addEventListener("blur", function(event){
    
    if (event.target.value === ""){
        passwordErrText.textContent="*Required"
        passwordErrText.style.color="red"
        passwordErrText.style.fontSize="12px"
        passwordErrText.style.fontFamily="roboto"
    }
    else{
        passwordErrText.textContent=""
    }
})
function checking(){
    if (userName.value === ""){
        mailErrText.textContent="*Required"
        mailErrText.style.color="red"
        mailErrText.style.fontSize="12px"
        mailErrText.style.fontFamily="roboto"
        
    }
    if (userPassword.value === ""){
        passwordErrText.textContent="*Required"
        passwordErrText.style.color="red"
        passwordErrText.style.fontSize="12px"
        passwordErrText.style.fontFamily="roboto"
        
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    checking()
    if(userName.value===userName1 && userPassword.value===password1){
        // document.getElementById("login-logo").href="file:///C:/Users/garak/Desktop/project/home.html"
        // document.getElementById("login-logo").target="_self"
   
       window.location.replace("file:///C:/Users/garak/Desktop/project/home.html");
      

       userName.value = ""
       userPassword.value=""
       usernamePasswordErrorText.textContent=""
    }
    else if(userName.value===userName2 && userPassword.value===password2){
       
        window.open("file:///C:/Users/garak/Desktop/project/home.html")
        userName.value = ""
        userPassword.value=""
        usernamePasswordErrorText.textContent=""
     }else if (userName.value==="" && userPassword.value===""){
        usernamePasswordErrorText.textContent=""
     }
     else{
        usernamePasswordErrorText.textContent="Please enter correct username and password !!"
        usernamePasswordErrorText.classList.add("login-error")
     }

    
})