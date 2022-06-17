var head = document.getElementsByTagName('HEAD')[0]; 

var link = document.createElement('link'); 
link.rel = 'stylesheet'; 
link.type = 'text/css'; 
link.href ='GetWeb.css'; 
head.appendChild(link); 

document.write('<script src="swiper.js"><\/script>');
function get(){
var copyText = document.getElementById("alert");
alert(copyText.value);
} 
document.getElementById("nav-toggler").addEventListener("click", function(){ 
const x = document.getElementById("navbar");
if(x.style.maxHeight === "2000px") {
x.style.maxHeight ="60px";		
x.style.transition ="all 0.25s";
}else {
x.style.maxHeight ="2000px";				
x.style.transition ="all 1s";
}
}); 

 
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('navbar');
    if (!container.contains(e.target)) {
        container.style.maxHeight ="60px";		
container.style.transition ="all 0.25s";
    }});				
