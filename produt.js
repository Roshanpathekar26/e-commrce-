let  isAuth = localStorage.getItem("isAuth") || "Not Authenticated";
if(isAuth !== "Authenticated"){
    // user is not authenticated 
    //window.location.href = "./login.html";
}
let productsDiv =document.getElementById("products")
let mainData =[];

function displayProducts(data){
    data.forEach((obj) =>{
       let div =document.createElement("div");
       let h3 =document.createElement("h3");
       h3.innerText = obj.title;
       let img = document.createElement("img");
       img.src = obj.image
      img.style.height ="100px"
      let price = document.createElement("p")
      price.innerText =`₹${obj.price}`;
      let rating =document.createElement("p")
     rating.innerText = obj.rating.rate ;
     div.append(h3,img,price,rating);
     productsDiv.append(div)

});
}
function sortRateHighTOLow(){
    mainData.sort(function(a, b){
        return b.rating.rate - a.rating.rate
    });

    
        //previos will geterase
        productsDiv.innerHTML=null;
        displayProducts(mainData);
   
}
function sortPriceLowTOHigh(){
    fetch("./db.json")
    .then((res)=>res.json())
    .then((data)=>{
        data.sort(function(a,b){
            return a.price. - b.price
        })
        //previos will geterase
        productsDiv.innerHTML=null;
        displayProducts(data);
    })
    .catch((err)=> console.log(err));
}


fetch("./db.json")
.then((res)=>res.json())
.then((data)=>displayProducts(data))
.catch((err)=>console.log(err));


//fetch("./db.json")
  //  .then(function(res){
    //    return res.json();
   // })
   // .then(function(data){
   //     displayProducts(data);
  //  })
    //.catch(function(err){
    //    console.log(err);
   // });
