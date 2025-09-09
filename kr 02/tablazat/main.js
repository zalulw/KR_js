document.getElementById("uploadData").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  if (name && !isNaN(age)) {
    const tableBody = document.getElementById("dataBody");
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const ageCell = document.createElement("td");
    ageCell.textContent = age;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);

    tableBody.insertBefore(newRow, tableBody.children[1]);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  } else {
    alert("érvénytelen adat");
  }
});
