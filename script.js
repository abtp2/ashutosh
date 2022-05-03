function get() {
const x = document.getElementById("air"); 
const y = document.getElementById("body"); 
  if (x.style.top === "5px") {
    x.style.top = "4.99px";
   x.style.background = "#5d5d5d";    
   y.style.overflowY ="auto";
    y.style.overflowX ="hidden";       
    alert("Airplane mode deactivated");
  } else {
    x.style.top = "5px";
     x.style.background = "#3fe413"   
       y.style.overflow ="hidden";
      y.style.overflowBehavior ="contain";
       alert("Airplane mode activated");
  }
}