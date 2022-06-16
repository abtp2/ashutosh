function compile() { var html = document.getElementById("html"); var css = document.getElementById("css"); var js = document.getElementById("js"); var code = document.getElementById("code").contentWindow.document; 
document.querySelector("button").onclick = function() { code.open(); code.writeln( html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>" ); code.close(); }; } compile();



function get(){
  const  x = document.getElementById("check");
  const  y = document.getElementById("html");
  const  z = document.getElementById("css");
   const  a = document.getElementById("js");      
   const  c = document.getElementById("sub");
   const  d = document.getElementById("code");
   
  if (x.style.justifyContent === "flex-start") {
    x.style.justifyContent = "flex-end";
   x.style.background = "#000";    
   x.style.transition ="all 0.3s";
     y.style.background  = "#000";
     y.style.color = "#fff";
      y.style.transition ="all 0.3s";
     z.style.background  = "#000";
       z.style.transition ="all 0.3s";
     z.style.color = "#fff";
     a.style.background  = "#000";
     a.style.color = "#fff";
       a.style.transition ="all 0.3s";
      c.style.background= "#000";
      c.style.transition ="all 0.3s";
       c.style.color= "#3fe413";
      
    
  } else {
    x.style.justifyContent = "flex-start";
     x.style.background = "#fff"   
       x.style.transition ="all 0.3s";
     y.style.background  = "#fff";
     y.style.color = "#000";
       y.style.transition ="all 0.3s";
     z.style.background  = "#fff";
     z.style.color = "#000";
       z.style.transition ="all 0.3s";
     a.style.background  = "#fff";
     a.style.color = "#000";
      a.style.transition ="all 0.3s";
     x.style.transition ="all 0.3s";
     c.style.background= "#fff";
     c.style.color= "#000";
         c.style.transition ="all 0.3s";
     
     
  }
}



function first(){
document.getElementById("html").style.display ="block";
document.getElementById("css").style.display ="none";
document.getElementById("js").style.display ="none";
}

function second(){
document.getElementById("html").style.display ="none";
document.getElementById("css").style.display ="block";
document.getElementById("js").style.display ="none";
}

function third(){
document.getElementById("html").style.display ="none";
document.getElementById("css").style.display ="none";
document.getElementById("js").style.display ="block";
}
