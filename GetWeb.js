function get(){
var copyText = document.getElementById("alert");
alert(copyText.value);
} 
document.getElementById("nav-toggler").addEventListener("click", function(){ 
const x = document.getElementById("navbar");
if(x.style.maxHeight === "2000px") {
x.style.maxHeight ="60px";		
x.style.transition ="all 0.3s";
}else {
x.style.maxHeight ="2000px";				
x.style.transition ="all 1s";
}
}); 

 