document.addEventListener("DOMContentLoaded", function() {
    // Set initial colors
    setColors();
  });
  
  function calculate() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var output = document.getElementById("output");
  
    if (input1 === 1 && input2 === 1) {
      output.textContent = "Output: 1";
    } else {
      output.textContent = "Output: 0";
    }
  }
  
  function setColors() {
    var backgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
    var brightness = getBrightness(backgroundColor);
    var textColor = brightness < 128 ? '#ffffff' : '#000000';
  
    document.body.style.backgroundColor = "#687EFF";
    document.getElementById("calculate-btn").style.color = textColor;
    document.getElementById("input1").style.backgroundColor = "#80B3FF";
    document.getElementById("input2").style.backgroundColor = "#98E4FF";
  }
  
  function getBrightness(color) {
    var match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    var r = parseInt(match[1], 16);
    var g = parseInt(match[2], 16);
    var b = parseInt(match[3], 16);
  
    return (r * 299 + g * 587 + b * 114) / 1000;
  }
  