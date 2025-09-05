document.getElementById("calculateBmi").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  let bmi;
  let result;

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result = "Nem szabályos bevitel";
    bmi = 0;
  } else {
    bmi = weight / Math.pow(height / 100, 2);

    switch (true) {
      case bmi < 16:
        result = "Súlyos soványság";
        break;

      case bmi >= 16 && bmi < 17:
        result = "Mérsékelt soványság";
        break;

      case bmi >= 17 && bmi < 18.5:
        result = "Enyhe soványság";
        break;

      case bmi >= 18.5 && bmi < 25:
        result = "Normál testsúly";
        break;

      case bmi >= 25 && bmi < 30:
        result = "Túlsúlyos";
        break;

      case bmi >= 30 && bmi < 35:
        result = "Elhízott (I. fokú)";
        break;

      case bmi >= 35 && bmi < 40:
        result = "Elhízott (II. fokú)";
        break;

      case bmi >= 40:
        result = "Súlyosan elhízott (III. fokú)";
        break;

      default:
        result = "Nem szabályos bevitel";
    }
  }

  document.getElementById("result").textContent = `Az állapotod: ${result}`;
  document.getElementById("bmi").textContent = `(BMI: ${bmi.toFixed(2)})`;
});
