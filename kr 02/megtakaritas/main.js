document.getElementById("calculate").addEventListener("click", function () {
  const monthlyWage = parseFloat(document.getElementById("monthlyWage").value);
  const savingsRate =
    parseFloat(document.getElementById("savingsRate").value) / 100;
  const duration = parseInt(document.getElementById("duration").value);

  if (isNaN(monthlyWage) || isNaN(savingsRate) || isNaN(duration)) {
    alert("Kérlek, töltsd ki az összes mezőt helyesen!");
    return;
  }

  const monthlySavings = monthlyWage * savingsRate;
  const totalSavings = monthlySavings * duration;

  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  const table = document.createElement("table");
  table.border = "1";

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th>Hónap</th>
    <th>Havi megtakarítás (Ft)</th>
    <th>Összesített megtakarítás (Ft)</th>
  `;
  table.appendChild(headerRow);

  let cumulativeSavings = 0;
  for (let month = 1; month <= duration; month++) {
    cumulativeSavings += monthlySavings;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${month}</td>
      <td>${monthlySavings.toFixed(2)}</td>
      <td>${cumulativeSavings.toFixed(2)}</td>
    `;
    table.appendChild(row);
  }

  resultDiv.appendChild(table);
});
