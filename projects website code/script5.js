function calculate() {
    var input = parseInt(document.getElementById("input").value);
    var output = document.getElementById("output");
  
    if (input === 1) {
      output.textContent = "Output: 0";
    } else {
      output.textContent = "Output: 1";
    }
  }
  