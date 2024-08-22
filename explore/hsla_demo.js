"use strict";




window.onload = function() {
   var hueValue, satValue, lightValue, alphaValue; 
   var hueSlide = document.getElementById("hueSlider");
   var satSlide = document.getElementById("saturationSlider");
   var lightSlide = document.getElementById("lightSlider");
   var alphaSlide = document.getElementById("alphaSlider");
   
   hueSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value);
      alphaValue = parseFloat(alphaSlide.value);       
      
      document.getElementById("hueValue").value = hueValue;
      var sineTheta = Math.sin(Math.PI/2-hueValue*Math.PI/180);
      var cosineTheta = Math.cos(Math.PI/2-hueValue*Math.PI/180);   
      document.getElementById("hueCircle").style.transform = "translate(" + 66*cosineTheta + "px," + -66*sineTheta + "px)";
      
      document.getElementById("satBox").style.background = "linear-gradient(to right, hsl("+hueValue+",0%,"+lightValue+"%), hsl("+hueValue+",100%,"+lightValue+"%))";  
      document.getElementById("lightBox").style.background = "linear-gradient(to right, hsl("+hueValue+","+satValue+"%, 0%), hsl("+hueValue+", "+satValue+"%, 50%), hsl("+hueValue+", "+satValue+"%, 100%))"; 
      showOutcome();
   };
   
   satSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);       
      
      document.getElementById("satValue").value = satValue;      
      document.getElementById("lightBox").style.background = "linear-gradient(to right, hsl("+hueValue+","+satValue+"%, 0%), hsl("+hueValue+", "+satValue+"%, 50%), hsl("+hueValue+", "+satValue+"%, 100%))";   
      showOutcome();
      
   };    

   lightSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);       
      
      document.getElementById("lightValue").value = lightValue;      
      document.getElementById("satBox").style.background = "linear-gradient(to right, hsl("+hueValue+",0%,"+lightValue+"%), hsl("+hueValue+",100%,"+lightValue+"%))"; 
      showOutcome();
   };   
   
   alphaSlide.oninput = function() {
      hueValue = parseInt(hueSlide.value); 
      satValue = parseInt(satSlide.value);
      lightValue = parseInt(lightSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);      
      
      showOutcome();
   };    
   
   function showOutcome() {
      document.getElementById("outcomebox").style.backgroundColor = "hsla(" + hueValue + "," + satValue + "%, " + lightValue + "%," + alphaValue + ")";
      document.getElementById("outcomecode").innerHTML = "hsla("+hueValue+", "+satValue+"%, "+lightValue+", "+alphaValue+")<br />"+document.getElementById("outcomebox").style.backgroundColor;
   }
   
};