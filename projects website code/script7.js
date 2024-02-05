
function calculate() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var output = document.getElementById("output");
  
    if ((input1 === 1 && input2 === 0) || (input1 === 0 && input2 === 1)) {
      output.textContent = "Output: 1"; // If either input is 1 but not both, output is 1
    } else {
      output.textContent = "Output: 0"; // Otherwise, output is 0
    }
  }
  