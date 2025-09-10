if (localStorage.getItem("number")) {
  document.getElementById("forint").value = localStorage.getItem("number");
}
document.getElementById("convert").addEventListener("click", function () {
  alert("átvált");

  const value = Number(document.getElementById("forint").value);
  localStorage.setItem("number", value);

  const forint = parseFloat(document.getElementById("forint").value);
  const currency = document.getElementById("currency").value;
  let result;

  if (isNaN(forint)) {
    result = "Kérlek számot adj meg!";
  } else {
    switch (currency) {
      case "usd":
        result = (forint / 350).toFixed(2);
        break;

      case "euro":
        result = (forint / 380).toFixed(2);
        break;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `${forint}Ft - ${result}${currency.toUpperCase()}`;
});
