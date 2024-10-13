
var sidenav=document.querySelector(".side-navbar")
var menuicon=document.querySelector(".navbar-menuicon")
 menuicon.addEventListener("click",function(){
    sidenav.style.left="0"
 })
 function closed() {
    sidenav.style.left="-60%"
 }
 var productcontainer=document.getElementById("product-items")
 var search=document.getElementById("search")
 var productlist=productcontainer.querySelectorAll("div")
  search.addEventListener("keyup",function(){
   var enteredvalue=event.target.value.toUpperCase()
   for(count=0;count<productlist.length;count=count+1){
      var productname=productlist[count].querySelector("p").textContent
      if(productname.toUpperCase().indexOf(enteredvalue<0))
         {
            productlist.style.display="none"
         }
         else{
            productlist.style.display="block"
         }
   }
  })