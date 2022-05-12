function get(){
var copyText = document.getElementById("alert");
alert(copyText.value);
}
 
document.getElementById("nav-toggler").addEventListener("click", function(){ 
const x = document.getElementById("navbar");
if(x.style.height === "auto") {
x.style.height ="60px";		
}else {
x.style.height ="auto";				
}
}); 

