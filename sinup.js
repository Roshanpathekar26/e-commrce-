let form = document.getElementById("from")
let Email =document.getElementById("Email")
let password=document.getElementById("password")

form.addEventListener("submit",function(event){
    event.preventDefault();
    let userDetails ={
        email:email.value,
        password:password.value,
    };
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
} );
