"use strict";




window.onload = function() {
   var hueValue, satValue, lightValue; 
   var hueSlide = document.getElementById("hueSlider");
   var satSlide = document.getElementById("saturationSlider");
   var lightSlide = document.getElementById("lightSlider");
   
   hueSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value);      
      
      document.getElementById("hueValue").value = hueValue;
      var sineTheta = Math.sin(Math.PI/2-hueValue*Math.PI/180);
      var cosineTheta = Math.cos(Math.PI/2-hueValue*Math.PI/180);      
      document.getElementById("hueCircle").style.transform = "translate(" + 66*cosineTheta + "px," + -66*sineTheta + "px)";
      document.getElementById("hueCircle2").style.transform = "translate(" + 56*cosineTheta + "px," + -56*sineTheta + "px)";   
      document.getElementById("hueCircle3").style.transform = "translate(" + 46*cosineTheta + "px," + -46*sineTheta + "px)";       

      
      document.getElementById("satBox").style.background = "linear-gradient(to right, hsl("+hueValue+",0%,"+lightValue+"%), hsl("+hueValue+",100%,"+lightValue+"%))";  
      document.getElementById("lightBox").style.background = "linear-gradient(to right, hsl("+hueValue+","+satValue+"%, 0%), hsl("+hueValue+", "+satValue+"%, 50%), hsl("+hueValue+", "+satValue+"%, 100%))"; 
      showOutcome();
   };
   
   satSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value);      
      
      document.getElementById("satValue").value = satValue;      
      document.getElementById("lightBox").style.background = "linear-gradient(to right, hsl("+hueValue+","+satValue+"%, 0%), hsl("+hueValue+", "+satValue+"%, 50%), hsl("+hueValue+", "+satValue+"%, 100%))";   
      showOutcome();
      
   };    

   lightSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value);      
      
      document.getElementById("lightValue").value = lightValue;      
      document.getElementById("satBox").style.background = "linear-gradient(to right, hsl("+hueValue+",0%,"+lightValue+"%), hsl("+hueValue+",100%,"+lightValue+"%))"; 
      showOutcome();
   };   
   
   function showOutcome() {
      document.getElementById("outcomebox").style.backgroundColor = "hsl(" + hueValue + "," + satValue + "%, " + lightValue + "%)";
      document.getElementById("outcomebox2").style.backgroundColor = "hsl(" + parseInt(hueValue) + "," + satValue*0.7 + "%, " + lightValue + "%)"; 
      document.getElementById("outcomebox3").style.backgroundColor = "hsl(" + parseInt(hueValue) + "," + satValue*0.4 + "%, " + lightValue + "%)";   
      
      document.getElementById("code1").innerHTML = "hsl("+hueValue+", "+satValue+"%, "+lightValue+"%)";
      document.getElementById("code2").innerHTML = "hsl("+parseInt(hueValue)+", "+(satValue*0.7).toFixed(0)+"%, "+lightValue+"%)";  
      document.getElementById("code3").innerHTML = "hsl("+parseInt(hueValue)+", "+(satValue*0.4).toFixed(0)+"%, "+lightValue+"%)"; 
      
      document.getElementById("code4").innerHTML = document.getElementById("outcomebox").style.backgroundColor;
      document.getElementById("code5").innerHTML = document.getElementById("outcomebox2").style.backgroundColor; 
      document.getElementById("code6").innerHTML = document.getElementById("outcomebox3").style.backgroundColor; 
   }
   
};