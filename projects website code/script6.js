function calculate() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var output = document.getElementById("output");
  
    if (input1 === 1 && input2 === 1) {
      output.textContent = "Output: 0"; // If both inputs are 1, output is 0
    } else {
      output.textContent = "Output: 1"; // Otherwise, output is 1
    }
  }
  