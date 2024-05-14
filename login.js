let form = document.getElementById("from")
let Email =document.getElementById("Email")
let password=document.getElementById("password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    let userDetails ={
        email:email.value,
        password:password.value,
    };
    let savedDetails=JSON.parse(localStorage.getItem("userDetails")) || {};
    if (userDetails.email===savedDetails.email && 
        userDetails.password===savedDetails.password){
    localStorage.setItem("is Auth","Authenticated");
        
        alert("Login succes!");
    }
    else{
        alert("wrong credentials");
    }
} );
