let Auth = localStorage.getItem("isAuth") || "Not Authenticated";
if(isAuth !== "Authenticated"){
    // user is not authenticated 
    window.location.href ="./login.html";
}
