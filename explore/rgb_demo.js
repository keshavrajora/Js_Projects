"use strict";




window.onload = function() {
   var redValue, greenValue, blueValue; 
   var redSlide = document.getElementById("redSlider");
   var greenSlide = document.getElementById("greenSlider");
   var blueSlide = document.getElementById("blueSlider");
   
   redSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value);      
      
      showOutcome();
   };
   
   greenSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value);      
      
      showOutcome();
      
   };    

   blueSlide.oninput = function() {
      redValue = parseInt(redSlide.value); 
      greenValue = parseInt(greenSlide.value);
      blueValue = parseInt(blueSlide.value);      
      
      showOutcome();
   };   
   
   function showOutcome() {
      var redHex = redValue.toString(16).toUpperCase();
      var greenHex = greenValue.toString(16).toUpperCase();
      var blueHex = blueValue.toString(16).toUpperCase();
      document.getElementById("outcomebox").style.backgroundColor = "rgb(" + redValue + "," + greenValue + ", " + blueValue + ")";
      document.getElementById("outcomecode").innerHTML = document.getElementById("outcomebox").style.backgroundColor + "<br />#"+redHex+greenHex+blueHex;
   }
   
};