"use strict";




window.onload = function() {
   var redValue, greenValue, blueValue, alphaValue; 
   var redSlide = document.getElementById("redSlider");
   var greenSlide = document.getElementById("greenSlider");
   var blueSlide = document.getElementById("blueSlider");
   var alphaSlide = document.getElementById("alphaSlider");
   
   redSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);      
      
      showOutcome();
   };
   
   greenSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);
      
      showOutcome();
      
   };    

   blueSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value);  
      alphaValue = parseFloat(alphaSlide.value);      
      
      showOutcome();
   };   
   
   alphaSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value); 
      alphaValue = parseFloat(alphaSlide.value);      
      
      showOutcome();
   }; 
   
   function showOutcome() {
      document.getElementById("outcomebox").style.backgroundColor = "rgba(" + redValue + "," + greenValue + ", " + blueValue + "," + alphaValue + ")";
      document.getElementById("outcomecode").innerHTML = document.getElementById("outcomebox").style.backgroundColor;
   }
   
};