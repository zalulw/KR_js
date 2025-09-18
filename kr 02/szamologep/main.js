if (localStorage.getItem("num1") && localStorage.getItem("num2")) {
  document.getElementById("num1").value = localStorage.getItem("num1");
  document.getElementById("num2").value = localStorage.getItem("num2");
}

if (localStorage.getItem("operation")) {
  document.getElementById("operation").value =
    localStorage.getItem("operation");
}

if (localStorage.getItem("result")) {
  document.getElementById("result").textContent =
    localStorage.getItem("result");
}


document.getElementById("calculate").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const value1 = Number(document.getElementById("num1").value);
  localStorage.setItem("num1", value1);
  const value2 = Number(document.getElementById("num2").value);
  localStorage.setItem("num2", value2);


  const operation = document.getElementById("operation").value;
  localStorage.setItem("operation", operation);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Kérlek, adj meg két számot!";
  } else {
    switch (operation) {
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "division":
        result = num2 !== 0 ? num1 / num2 : "Nullával nem osztható!";
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      default:
        result = "Ismeretlen művelet!";
    }
  }

  localStorage.setItem("result", result);


  document.getElementById("result").textContent = result;
});
