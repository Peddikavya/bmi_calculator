function calculateBMI() {
  let mass = parseFloat(document.getElementById('mass').value);
  let height = parseFloat(document.getElementById('height').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(mass) || isNaN(height) || mass <= 0 || height <= 0) {
    resultDiv.innerHTML = "Please enter valid mass and height.";
    resultDiv.style.color = "#ff4d4d";
    return;
  }

  let bmi = mass / ((height / 100) ** 2);
  bmi = bmi.toFixed(2);

  let message = "";
  let color = "";

  if (bmi < 18.5) {
    message = `Your BMI is ${bmi} — Underweight`;
    color = "#ffad33";
  } else if (bmi < 25) {
    message = `Your BMI is ${bmi} — Normal weight`;
    color = "#28a745";
  } else if (bmi < 30) {
    message = `Your BMI is ${bmi} — Overweight`;
    color = "#ffc107";
  } else {
    message = `Your BMI is ${bmi} — Obese`;
    color = "#dc3545";
  }

  resultDiv.innerHTML = message;
  resultDiv.style.color = color;
}
