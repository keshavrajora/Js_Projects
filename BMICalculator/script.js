const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Check for valid height and weight
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: <span>${bmi}</span>`;

    // Optionally categorize BMI
    let category;
    switch (true) {
      case (bmi < 18.5):
        category = 'Underweight';
        break;
      case (bmi >= 18.5 && bmi < 24.9):
        category = 'Normal weight';
        break;
      case (bmi >= 25 && bmi < 29.9):
        category = 'Overweight';
        break;
      default:
        category = 'Obesity';
    }
    results.innerHTML += `<br>Your BMI category is: ${category}`;
  }
});
